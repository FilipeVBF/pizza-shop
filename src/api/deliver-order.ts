import { api } from "@/lib/axios";

interface DeliverOrderParams {
  orderId: string;
}

export async function deliverOrder({ orderId }: DeliverOrderParams) {
  const response = await api.patch(`/orders/${orderId}/deliver`);
}
