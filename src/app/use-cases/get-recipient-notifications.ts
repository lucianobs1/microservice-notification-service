import { Notification } from '@app/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface GetRecipientNotificationsRequest {
  recipient_id: string;
}

interface CountRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipient_id } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipient_id);

    return {
      notifications,
    };
  }
}

export { GetRecipientNotifications };
