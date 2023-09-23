import { SelectChangeEvent } from "@mui/material";

export interface SelectSideProps {
    side?: "left" | "right";
    handleChange?: (event: SelectChangeEvent<"left" | "right">) => void | undefined;
}