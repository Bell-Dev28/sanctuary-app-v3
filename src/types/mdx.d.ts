declare module '*.mdx' {
  let MDXContent: (props: Record<string, unknown>) => JSX.Element;
  export default MDXContent;
}
