import { useRouter } from "next/router";
import { getExternalUrl } from "../../utils/helper";
import { useEffect } from "react";
import Head from "next/head";

const Project = ({ projectName }) => {
  const router = useRouter();
  const externalUrl = getExternalUrl(projectName);

  console.log(projectName, router.asPath, externalUrl);

  useEffect(() => {
    if (externalUrl === "/404") {
      router.push(externalUrl, router.asPath);
    }
  });

  return (
    <>
      <Head>
        <title>Prabhat Pal | Projects</title>
      </Head>
      <div className="flex">
        <iframe
          src={externalUrl}
          className="absolute h-full w-full inset-0"
        ></iframe>
      </div>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const { project } = ctx.query;
  return { props: { projectName: project } };
};

export default Project;
