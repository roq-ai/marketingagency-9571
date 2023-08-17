import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { markaValidationSchema } from 'validationSchema/markas';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.marka
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getMarkaById();
    case 'PUT':
      return updateMarkaById();
    case 'DELETE':
      return deleteMarkaById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getMarkaById() {
    const data = await prisma.marka.findFirst(convertQueryToPrismaUtil(req.query, 'marka'));
    return res.status(200).json(data);
  }

  async function updateMarkaById() {
    await markaValidationSchema.validate(req.body);
    const data = await prisma.marka.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });
    if (req.body.name) {
      await roqClient.asUser(roqUserId).updateTenant({ id: user.tenantId, tenant: { name: req.body.name } });
    }
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteMarkaById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.marka.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
