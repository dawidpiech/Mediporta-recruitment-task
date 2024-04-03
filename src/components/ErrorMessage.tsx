import { Box } from "@mui/material";

interface ErrorMessageProps {
  message: string;
  borderColor: string;
  fontColor: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  borderColor,
  fontColor,
}) => {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        border: `3px solid ${borderColor}`,
        padding: "25px",
        borderRadius: "15px",
        textAlign: "center",
        fontSize: "1.5rem",
        color: fontColor,
      }}
    >
      {message}
    </Box>
  );
};

export default ErrorMessage;
