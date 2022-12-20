import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { NotificationProps } from '../../src/app/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('This is a notification'),
    recipientId: 'recipient-1',
    ...override,
  });
}
