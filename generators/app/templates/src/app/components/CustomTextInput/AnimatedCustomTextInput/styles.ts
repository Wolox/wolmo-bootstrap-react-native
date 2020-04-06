import { StyleSheet } from "react-native";
import fonts from "@config/fonts";
import {
  black,
  blue,
  transparent,
  gray,
  darkGray,
  red,
} from "@constants/colors";
import { SIZES } from "@constants/fonts";

const INPUT_PADDING = 5;
const IMAGE_SIZE = 14;

export default StyleSheet.create({
  containerWithLabel: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  inputContainer: {
    flexDirection: "row",
    height: 25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    ...fonts.baseFont,
    backgroundColor: transparent,
    fontSize: SIZES.XSMALL,
    position: "absolute",
    left: INPUT_PADDING,
    marginTop: 3,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputStyle: {
    ...fonts.baseFont,
    fontSize: SIZES.SMALL,
    color: darkGray,
    padding: 0,
    marginHorizontal: 0,
    marginBottom: 0,
  },
  singleInput: {
    flex: 1,
  },
  borderWidth: {
    borderBottomWidth: 1,
  },
  bottomBorderGray: {
    borderBottomColor: black,
  },
  bottomBorderBlue: {
    borderBottomColor: blue,
  },
  bottomBorderRed: {
    borderBottomColor: red,
  },
  bottomBorderLightGray: {
    borderBottomWidth: 1,
    borderBottomColor: gray,
  },
  title: {
    marginTop: 5,
    backgroundColor: transparent,
  },
  iconStyle: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  editableStyle: {
    marginRight: 10,
    marginLeft: 8,
  },
  offset: {
    height: 80,
  },
  errorMessage: {
    marginTop: 3,
  },
});
