import { ANNOUNCEMENT_TEXT, BRAND_COLORS } from '@shared/constants';

export default function AnnouncementBar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 py-3 text-center text-sm font-medium text-white"
      style={{ backgroundColor: BRAND_COLORS.primary }}
    >
      {ANNOUNCEMENT_TEXT}
    </div>
  );
}
