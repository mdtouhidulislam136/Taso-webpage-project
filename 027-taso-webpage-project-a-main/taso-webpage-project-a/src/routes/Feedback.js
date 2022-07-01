
import { ServoiceFeedback } from 'react-feedback-widget';
import {useTranslation} from 'react-i18next';


function Feedback() {
  const {t, i18n } = useTranslation();
    const config = {
        servId: 'cl4ms0evl006009lfpm3o58pz',
        servPID: 'cl4ms0evl006109lfp3hjdwha',
        userEmail: 'mdtouhidul.islam136@gmail.com',
      };

    return (
      <>
        <div className="feedback">
          <ServoiceFeedback config={config}>
            <div className="feedback">
              <button type="button" className="feedback_button">{t('feedback')}</button>
            </div>
          </ServoiceFeedback>
        </div>
      </>
    )
  }
export default Feedback;
