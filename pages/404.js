import Image from "next/image";
import Link from "next/link";
import PageLayout from "@components/pageLayout";

const Custom404 = () => {
  return (
    <PageLayout>
      <div className="flex flex-col justify-center items-center">
        <Image src="/images/404.svg" width="1075" height="585" />
        <Link href="/">
          <a className="mt-12 btn-primary">Go to home page</a>
        </Link>
      </div>
    </PageLayout>
  );
};

export default Custom404;
