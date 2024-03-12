import { FC } from 'react';
import ShareIcon from '../icons/ShareIcon.';

interface NativeShareButtonProps {
  title: string;
  text: string;
  url: string;
}

const NativeShareButton: FC<NativeShareButtonProps> = ({
  title,
  text,
  url,
}) => {
  const handleShare = async () => {
    const shareData: ShareData = {
      title,
      text: `${title}: ${text}`,
      url,
    };

    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error('Fehler beim Teilen:', err);
    }
  };

  return (
    <button onClick={handleShare} aria-label="Inhalt teilen">
      <ShareIcon aria-hidden="true" />
      <span>Teilen</span>
    </button>
  );
};

export default NativeShareButton;
