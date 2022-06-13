import React, { useEffect, useRef } from "react";
import { styled } from "@storybook/theming";
import { Title, Source, Link } from "@storybook/components";
import sdk from "@stackblitz/sdk";

// setTimeout(() => {
//   sdk.embedGithubProject("myDiv", "gothinkster/angular-realworld-example-app", {
//     height: 320,
//   });
// }, 3000);

// const TabWrapper = styled.div(({ theme }) => ({
//   background: theme.background.content,
//   padding: "0",
//   minHeight: "100vh",
//   boxSizing: "border-box",
//   display: "flex",
// }));
const TabWrapper = styled.div`
  padding: 0;
  height: 100vh;
  box-sizing: border-box;
  iframe {
    height: 100%;
  }
`

interface TabContentProps {
  file: string[];
}

export const TabContent: React.FC<TabContentProps> = ({ file }) => {
  const root = useRef();
  useEffect(() => {
    console.log({file})
    sdk.embedGithubProject(
      root.current,
      `gothinkster/angular-realworld-example-app?file${file.join(',')}`,
      {
        view: "editor"
      }
    );
  }, []);
  return (
    <TabWrapper>
      <div id="myDiv" ref={root}></div>
    </TabWrapper>
  );
};
