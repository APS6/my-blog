const BlockContent = require("@sanity/block-content-to-react");
import Code from "@/components/Code";

const serializers = {
  types: {
    code: (props) => (
      <Code code={props.node.code} language={props.node.language} file={props.node.filename}/>
    ),
  },
};

export default function Body(props) {

    const content = props.content;

  return (
    <BlockContent
      blocks={content}
      projectId="n0sz73ii"
      dataset="production"
      serializers={serializers}
    />
  );
}
