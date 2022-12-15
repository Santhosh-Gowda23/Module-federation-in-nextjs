import dynamic from "next/dynamic";

const SampleComponent = dynamic(() => import("catalog/pages/catalogOnShop"), {
  ssr: false,
});

export default SampleComponent;
