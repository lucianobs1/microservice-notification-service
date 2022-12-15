import { Notification } from '@app/entities/notification';

abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}

export { NotificationsRepository };
