import * as C from "./styles";
import { ReactComponent as LinkedinLogo } from "../../assets/logo-linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/logo-github.svg";
import { ReactComponent as TelegramLogo } from "../../assets/logo-telegram.svg";

export const SocialMedia = () => {
  return (
    <C.Container>
      <li>
        <C.Link href="https://www.linkedin.com/in/subhadeep3902/">
          <LinkedinLogo />
        </C.Link>
      </li>
      <li>
        <C.Link href="https://github.com/subhadeeproy3902">
          <GithubLogo />
        </C.Link>
      </li>
    </C.Container>
  );
};
