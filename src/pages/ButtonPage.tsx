import { GoBell, GoDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <div>
      {/*  just showing additional classname overrides available */}
      <Button primary className="mb-10" onClick={handleClick}>
        <GoBell />
        Primary
      </Button>

      <Button primary rounded onClick={handleClick}>
        <GoBell />
        Primary Rounded
      </Button>

      <Button primary outline onClick={handleClick}>
        <GoBell />
        Primary Outline
      </Button>

      <Button primary outline rounded onClick={handleClick}>
        <GoBell />
        Primary Outline Rounded
      </Button>

      <Button secondary onMouseEnter={handleClick}>
        <GoDownload />
        Secondary
      </Button>

      <Button secondary rounded onMouseEnter={handleClick}>
        <GoDownload />
        Secondary Rounded
      </Button>

      <Button secondary outline onMouseEnter={handleClick}>
        <GoDownload />
        Secondary Outline
      </Button>

      <Button secondary outline rounded onMouseEnter={handleClick}>
        <GoDownload />
        Secondary Outline Rounded
      </Button>

      <Button danger onMouseLeave={handleClick}>
        <GoDatabase />
        Danger
      </Button>

      <Button danger rounded onMouseLeave={handleClick}>
        <GoDatabase />
        Danger Rounded
      </Button>

      <Button danger outline onMouseLeave={handleClick}>
        <GoDatabase />
        Danger Outline
      </Button>

      <Button danger outline rounded onMouseLeave={handleClick}>
        <GoDatabase />
        Danger Outline Rounded
      </Button>

      <Button warning onMouseLeave={handleClick}>
        <GoDownload />
        Warning
      </Button>

      <Button warning rounded onMouseLeave={handleClick}>
        <GoDownload />
        Warning Rounded
      </Button>

      <Button warning outline onMouseLeave={handleClick}>
        <GoDownload />
        Warning Outline
      </Button>

      <Button warning outline rounded onMouseLeave={handleClick}>
        <GoDownload />
        Warning Outline Rounded
      </Button>

      <Button success onClick={handleClick}>
        <GoDownload />
        Success
      </Button>

      <Button success rounded onClick={handleClick}>
        <GoDownload />
        Success Rounded
      </Button>

      <Button success outline onClick={handleClick}>
        <GoDownload />
        Success Outline
      </Button>

      <Button success outline rounded onClick={handleClick}>
        <GoDownload />
        Success Outline Rounded
      </Button>
    </div>
  );
}

export default ButtonPage;
