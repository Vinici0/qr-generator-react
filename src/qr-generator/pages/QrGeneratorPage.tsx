import { QrGeneratorLayout } from "../layout/QrGeneratorLayout";
import { ListQrGenerator } from "../view/ListQrGenerator";

export const QrGeneratorPage = () => {
  return (
    <QrGeneratorLayout>
        <ListQrGenerator />
    </QrGeneratorLayout>
  );
};
