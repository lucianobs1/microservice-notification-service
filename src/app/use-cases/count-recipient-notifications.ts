import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface CountRecipientNotificationsRequest {
  recipient_id: string;
}

interface CountRecipientNotificationsResponse {
  count: number;
}

@Injectable()
class CountRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipient_id } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipient_id,
    );

    return {
      count,
    };
  }
}

export { CountRecipientNotifications };
