// utils/notification.ts
import { notification } from 'ant-design-vue';
type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const openNotificationWithIcon = (type: NotificationType, message: string) => {
    notification[type]({
        message: 'ແຈ້ງເຕືອນ',
        description: message,
    });
};
