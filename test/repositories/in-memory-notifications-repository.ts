import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';

class InMemoryNotificationsRepository implements NotificationsRepository {
  notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}

export { InMemoryNotificationsRepository };
