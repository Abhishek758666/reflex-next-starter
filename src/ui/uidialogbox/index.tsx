// import UIButton from "../uibutton";
// import UIDialog from "../UIDialog";

// export interface UIDialogBoxProps {
//   cancel: () => void;
//   confirm: () => void;
//   title: string;
//   message: string;
//   cancelName?: string;
//   confirmName?: string;
// }
// export default function UIDialogBox({
//   cancel,
//   confirm,
//   message,
//   title,
//   cancelName,
//   confirmName,
// }: UIDialogBoxProps) {
//   return (
//     <UIDialog onClose={cancel} showAnimation>
//       <div className="dialogbox">
//         <h2 className="dialogbox-heading">{title}</h2>
//         <p className="dialogbox-message">{message}</p>
//         <div className="dialogbox-actions">
//           <UIButton
//             label={cancelName ?? "Cancel"}
//             type="secondary"
//             className="dialogbox-actions--btn cancel duotone"
//             onClick={cancel}
//           />
//           <UIButton
//             label={confirmName ?? "Confirm"}
//             type="primary"
//             className="dialogbox-actions--btn"
//             onClick={confirm}
//           />
//         </div>
//       </div>
//     </UIDialog>
//   );
// }

import { CSSProperties, useRef } from "react";
import UIButton from "../uibutton";

interface UIDialogProps {
  style?: CSSProperties;
  showAnimation?: boolean;
  cancel: () => void;
  confirm: () => void;
  title: string;
  message: string;
  cancelName?: string;
  confirmName?: string;
}

export default function UIDialog({
  cancel,
  confirm,
  message,
  title,
  cancelName,
  confirmName,
  style,
  showAnimation = false,
}: UIDialogProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleCancel = () => {
    if (!showAnimation) return cancel?.();
    modalRef.current?.classList.add("hide");
    setTimeout(() => cancel?.(), 700);
  };
  return (
    <div className="dialog">
      <div className="dialog-overlay"></div>
      <div className="dialog-content" style={style} ref={modalRef}>
        <div
          className="dialog-content--cross"
          onClick={handleCancel}
          title="close"
        >
          <i className="fa-regular fa-times"></i>
        </div>
        <div className="dialog-content--children">
          <div className="dialogbox">
            <h2 className="dialogbox-heading">{title}</h2>
            <p className="dialogbox-message">{message}</p>
            <div className="dialogbox-actions">
              <UIButton
                label={cancelName ?? "Cancel"}
                type="secondary"
                className="dialogbox-actions--btn cancel duotone"
                onClick={cancel}
              />
              <UIButton
                label={confirmName ?? "Confirm"}
                type="primary"
                className="dialogbox-actions--btn"
                onClick={confirm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
