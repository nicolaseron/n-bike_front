import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "~/tailwind.config";

//@ts-ignore
const config = resolveConfig(tailwindConfig);

export const useTailwindConfig = () => {
    return {config}
}