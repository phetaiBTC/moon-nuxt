// plugins/notification.ts
import { openNotificationWithIcon } from '@/utils/notification';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      notify: openNotificationWithIcon,
    },
  };
});
