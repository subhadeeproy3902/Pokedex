import { SocialMedia } from "../../SocialMedia";
import * as C from "./styles";

export const Footer = () => {
  return (
    <div className="main-container">
      <C.Container>
        <C.Copy>
          <span>Made with ❤️ by Subhadeep Roy</span>
          <span>ⓒ All Rights Reserved 2023</span>
        </C.Copy>
        <SocialMedia />
      </C.Container>
    </div>
  );
};
