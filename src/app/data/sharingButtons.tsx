import { SharingButton } from '../types';

import XIcon from '../components/icons/X';
import WhatsAppIcon from '../components/icons/WhatsApp';
import MailIcon from '../components/icons/MailIcon';
import FacebookIcon from '../components/icons/FacebookIcon';
import TelegramIcon from '../components/icons/TelegramIcon';

const sharingButtons: SharingButton[] = [
  {
    title: 'WhatsApp',
    href: 'https://wa.me/?text=',
    description: 'WhatsApp',
    icon: <WhatsAppIcon />,
  },
  {
    title: 'Telegram',
    href: 'https://t.me/share/url?url=',
    description: 'Telegram',
    icon: <TelegramIcon />,
  },
  {
    title: 'X',
    href: 'https://twitter.com/intent/tweet?url=',
    description: 'X',
    icon: <XIcon />,
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/sharer/sharer.php?u=',
    description: 'Facebook',
    icon: <FacebookIcon />,
  },
  {
    title: 'E-Mail',
    href: 'mailto:?subject=Lorem%20ipsum&body=',
    description: 'E-Mail',
    icon: <MailIcon />,
  },
];

export default sharingButtons;
