import Button from "@mui/material/Button";

const CommonButton = () => {
  return (
    <div>
      <Button variant="contained" color="secondary">
        Contained Primary
      </Button>
      <Button variant="outlined" color="primary">
        Outlined Primary
      </Button>
    </div>
  );
};

export default CommonButton;
