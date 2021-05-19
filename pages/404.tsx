import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Custom404: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image src="/images/404.svg" width="1075" height="585" />
      <h3 className="mt-8">Looks like you are lost</h3>
      <p>The page you are looking is not available</p>
      <Link href="/">
        <a className="mt-12 btn-primary">Go to home page</a>
      </Link>
    </div>
  );
};

export default Custom404;
