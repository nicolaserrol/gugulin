import {
  Dimensions,
  PixelRatio,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { generateShadow } from '@/lib/shadow_generator';

import { Colors } from './Colors';
import {
  PRIMARY_TEXT_FONT,
  PRIMARY_TEXT_FONT_BOLD,
  PRIMARY_TEXT_FONT_LIGHT,
  PRIMARY_TEXT_FONT_MEDIUM,
  PRIMARY_TEXT_FONT_SEMIBOLD,
} from './Fonts';

export const GRID_SPACING = 5;
export const { height, width } = Dimensions.get('window');
export const CARD_HEIGHT = width < 350 ? 200 : 250;
const SLIDER_WIDTH = width - 60;

// Background colors
const DEFAULT_BACKGROUND_COLOR = '#fff';
const BACKDROP_COLOR = '#f7f7f7';

const MODAL_HEIGHT = height * 0.6;
const MODAL_WIDTH = width - 40;

const ROW_WIDTH = width;
const HORIZONTAL_ROW_WIDTH = width - 60;

const calculateLineHeight = (fontSize: number) => fontSize * 1.5;
const vendorCardTranslateY = height - (Platform.OS === 'ios' ? 390 : 340);

const RADIO_BUTTON_SIZE = 10;

// --- Common styles
const center = {
  alignItems: 'center',
  justifyContent: 'center',
};
const spaceAround = {
  justifyContent: 'space-around',
};
const spaceBetween = {
  alignItems: 'center',
  justifyContent: 'space-between',
};
const stretch = {
  alignSelf: 'stretch',
  flexDirection: 'row',
  justifyContent: 'space-between',
};
const vendorCard = {
  alignSelf: 'center',
  marginTop: 20,
  maxWidth: 400,
  width: width - 30,
};
const defaultImageSize = {
  height: 85,
  width: 85,
};

const variables = {
  button: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderRadius: 8,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    ...center,
  },

  // Captions have font weights equal to texts but the color accent is weakened
  // and font sizes are smaller than texts
  caption1: {
    color: '#828282',
    fontFamily: PRIMARY_TEXT_FONT_LIGHT,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  caption2: {
    color: '#828282',
    fontFamily: PRIMARY_TEXT_FONT_LIGHT,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  caption3: {
    color: '#828282',
    fontFamily: PRIMARY_TEXT_FONT_LIGHT,
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },

  extraLargeGutter: 45,

  // Headings are necessarily text elements with heavier font weights and stronger color accent
  // and font sizes that are generally bigger than regular texts
  heading1: {
    color: '#333333',
    fontFamily: PRIMARY_TEXT_FONT_MEDIUM,
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  heading2: {
    color: '#333333',
    fontFamily: PRIMARY_TEXT_FONT_MEDIUM,
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  heading3: {
    color: '#333333',
    fontFamily: PRIMARY_TEXT_FONT_MEDIUM,
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  heading4: {
    color: '#333333',
    fontFamily: PRIMARY_TEXT_FONT_MEDIUM,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  heading5: {
    color: '#333333',
    fontFamily: PRIMARY_TEXT_FONT_MEDIUM,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  heading6: {
    color: '#333333',
    fontFamily: PRIMARY_TEXT_FONT_MEDIUM,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },

  largeGutter: 30,
  lineColor: '#e5e5e5',
  mediumGutter: 15,
  smallGutter: 5,

  // Subtitles are headings with muted text color
  subheading1: {
    color: '#666666',
    fontFamily: PRIMARY_TEXT_FONT_MEDIUM,
    fontSize: 19,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  subheading2: {
    color: '#666666',
    fontFamily: PRIMARY_TEXT_FONT_MEDIUM,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  subheading3: {
    color: '#666666',
    fontFamily: PRIMARY_TEXT_FONT_MEDIUM,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },

  // Texts would have a font weight equal to 400 and color accent similar to headings
  // but with font sizes that are sized down
  text1: {
    color: '#333333',
    fontFamily: PRIMARY_TEXT_FONT,
    fontSize: 19,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  text2: {
    color: '#333333',
    fontFamily: PRIMARY_TEXT_FONT,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  text3: {
    color: '#333333',
    fontFamily: PRIMARY_TEXT_FONT,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  text4: {
    color: '#333333',
    fontFamily: PRIMARY_TEXT_FONT,
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  text5: {
    color: '#333333',
    fontFamily: PRIMARY_TEXT_FONT,
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
};

export const styles = StyleSheet.create({
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
  },
  alertMessage: {
    color: '#333333',
    fontFamily: PRIMARY_TEXT_FONT_LIGHT,
    fontSize: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
  alertTitle: {
    color: '#333333',
    fontFamily: PRIMARY_TEXT_FONT_MEDIUM,
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },

  alignCenter: { alignSelf: 'center' },
  bold: { fontFamily: PRIMARY_TEXT_FONT_BOLD },
  borderBottom: {
    borderBottomWidth: 0.6,
    borderColor: '#F2F2F2',
  },
  borderTop: {
    borderColor: '#F2F2F2',
    borderTopWidth: 0.6,
  },
  boxBordered: {
    borderColor: '#F3F3F3',
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10,
    padding: 15,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonFull: {
    ...variables.button,
    alignSelf: 'stretch',
    borderRadius: 0,
    borderWidth: 0,
    flex: 1,
    height: 55,
  },
  buttonGroupLeft: {
    borderBottomLeftRadius: variables.button.borderRadius,
    borderColor: '#4F4F4F',
    borderRightWidth: 0.5,
    borderTopLeftRadius: variables.button.borderRadius,
    borderWidth: 1,
  },
  buttonGroupRight: {
    borderBottomRightRadius: variables.button.borderRadius,
    borderColor: '#4F4F4F',
    borderLeftWidth: 0.5,
    borderTopRightRadius: variables.button.borderRadius,
    borderWidth: 1,
  },
  buttonGroupText: {
    color: Colors.gray3,
    fontFamily: PRIMARY_TEXT_FONT_MEDIUM,
    fontSize: 12,
  },
  buttonMinHeight: { minHeight: 38 },
  buttonOutline: {
    ...center,
    backgroundColor: '#FFF',
    borderColor: Colors.gray2,
    borderRadius: 10,
    borderWidth: 0.8,
    padding: 10,
  },
  buttonPrimary: {
    ...variables.button,
    backgroundColor: variables.button.backgroundColor,
    borderColor: variables.button.borderColor,
    borderWidth: 1,
  },
  buttonText: {
    color: Colors.primary,
    fontFamily: PRIMARY_TEXT_FONT_SEMIBOLD,
    paddingVertical: 10,
    textAlignVertical: 'center',
  },
  buttonWrapper: {
    borderRadius: 5,
    overflow: 'hidden',
  },

  caption1: {
    ...variables.caption1,
  },
  caption2: {
    ...variables.caption2,
  },
  caption3: {
    ...variables.caption3,
  },
  center: { ...center },
  centerRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  centerSelf: {
    ...center,
    alignSelf: 'center',
  },
  closeButton: {
    ...center,
    borderColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.2,
    height: 32,
    marginTop: 37,
    width: 32,
  },

  divider: {
    ...stretch,
    paddingTop: 25,
  },
  dividerLine: {
    ...stretch,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: variables.lineColor,
    paddingTop: 0,
  },
  dividerSmall: {
    ...stretch,
    paddingTop: 8,
  },
  dots: {
    alignSelf: 'flex-start',
    marginVertical: -5,
  },
  dropdown: {
    ...center,
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  dropdownButton: {
    ...spaceBetween,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  dropdownOverlay: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    height: '100%',
    width: '100%',
  },
  dropdownOverlayView: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderTopWidth: 0,
    overflow: 'hidden',
    position: 'absolute',
    ...generateShadow(10),
  },
  dropdownRow: {
    ...center,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 0.8,
    flex: 1,
    flexDirection: 'row',
    height: 40,
  },
  dropdownText: {
    color: '#333333',
    fontFamily: PRIMARY_TEXT_FONT_LIGHT,
    fontSize: 15,
  },

  elevatedCard: {
    ...generateShadow(3),
    backgroundColor: 'white',
    borderRadius: 5,
    height: 208,
    marginTop: 10,
    overflow: 'hidden',
  },
  error: { backgroundColor: '#bb0000' },
  errorMessage: {
    ...variables.caption2,
    color: Colors.danger,
    marginTop: 10,
  },

  flex1: { flex: 1 },
  flex15: { flex: 1.5 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },
  flexCenter: {
    flex: 1,
    ...center,
  },
  flexEnd: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  flexGrow1: { flexGrow: 1 },
  flexRowVerticalCenter: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  fullScreen: {
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  fullWidth: { width },
  fullWindowDimension: {
    height,
    width,
  },

  heading1: {
    ...variables.heading1,
  },
  heading2: {
    ...variables.heading2,
  },
  heading3: {
    ...variables.heading3,
  },
  heading4: {
    ...variables.heading4,
  },
  heading5: {
    ...variables.heading5,
  },
  heading6: {
    ...variables.heading6,
  },

  horizontal: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  horizontalCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  horizontalEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  horizontalEndVCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  horizontalEvenly: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  horizontalEvenlyCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  horizontalReverse: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
  horizontalStretch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalStretchCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalStretchEnd: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalVCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  horizontalVEnd: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  icon: {
    height: 30,
    width: 30,
  },
  iconSm: {
    height: 22,
    width: 22,
  },
  'image-l': {
    height: 170,
    width: 170,
    ...center,
  },
  'image-md': {
    height: 110,
    width: 110,
    ...center,
  },
  'image-sm': {
    height: 75,
    width: 75,
    ...center,
  },
  'image-xl': {
    height: 200,
    width: 200,
    ...center,
  },
  'image-xs': {
    height: 40,
    width: 40,
    ...center,
  },
  'image-xxl': {
    height: 250,
    width: 250,
    ...center,
  },
  lgGutter: {
    padding: variables.largeGutter,
  },
  lgGutterBottom: {
    paddingBottom: variables.largeGutter,
  },
  lgGutterBottomLgHorizontal: {
    paddingBottom: variables.largeGutter,
    paddingHorizontal: variables.largeGutter,
  },
  lgGutterHorizontal: {
    paddingHorizontal: variables.largeGutter,
  },
  lgGutterLeft: {
    paddingLeft: variables.largeGutter,
  },
  lgGutterRight: {
    paddingRight: variables.largeGutter,
  },
  lgGutterTop: {
    paddingTop: variables.largeGutter,
  },
  lgGutterTopLgHorizontal: {
    paddingHorizontal: variables.largeGutter,
    paddingTop: variables.largeGutter,
  },
  lgGutterTopMdHorizontal: {
    paddingHorizontal: variables.mediumGutter,
    paddingTop: variables.largeGutter,
  },
  lgGutterVertical: {
    paddingVertical: variables.largeGutter,
  },
  lgGutterVerticalMdHorizontal: {
    paddingHorizontal: variables.mediumGutter,
    paddingVertical: variables.largeGutter,
  },
  lgMarginBottom: {
    marginBottom: variables.largeGutter,
  },
  lgMarginHorizontal: {
    marginHorizontal: variables.largeGutter,
  },

  mdGutter: {
    padding: variables.mediumGutter,
  },
  mdGutterBottom: {
    paddingBottom: variables.mediumGutter,
  },
  mdGutterBottomMdHorizontal: {
    paddingBottom: variables.mediumGutter,
    paddingHorizontal: variables.mediumGutter,
  },
  mdGutterBottomSmTop: {
    paddingBottom: variables.mediumGutter,
    paddingTop: variables.smallGutter,
  },
  mdGutterHorizontal: {
    paddingHorizontal: variables.mediumGutter,
  },
  mdGutterLeft: {
    paddingLeft: variables.mediumGutter,
  },
  mdGutterRight: {
    paddingRight: variables.mediumGutter,
  },
  mdGutterTop: {
    paddingTop: variables.mediumGutter,
  },
  mdGutterTopLgBottom: {
    paddingBottom: variables.largeGutter,
    paddingTop: variables.mediumGutter,
  },
  mdGutterTopLgHorizontal: {
    paddingHorizontal: variables.largeGutter,
    paddingTop: variables.mediumGutter,
  },
  mdGutterTopMdHorizontal: {
    paddingHorizontal: variables.mediumGutter,
    paddingTop: variables.mediumGutter,
  },
  mdGutterTopSmBottom: {
    paddingBottom: variables.smallGutter,
    paddingTop: variables.mediumGutter,
  },
  mdGutterVertical: {
    paddingVertical: variables.mediumGutter,
  },
  mdGutterVerticalSmHorizontal: {
    paddingHorizontal: variables.smallGutter,
    paddingVertical: variables.mediumGutter,
  },
  mdMarginHorizontal: {
    marginHorizontal: variables.mediumGutter,
  },
  mdMarginTop: {
    marginTop: variables.mediumGutter,
  },

  mdxGutter: {
    padding: 10,
  },
  mdxGutterTop: { paddingTop: 10 },
  medium: { fontFamily: PRIMARY_TEXT_FONT_MEDIUM },
  modal: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    height: MODAL_HEIGHT,
    maxHeight: 470,
    maxWidth: 450,
    minHeight: 440,
    overflow: 'hidden',
    paddingBottom: 20,
    width: MODAL_WIDTH,
  },
  modal2: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    maxHeight: '80%',
    overflow: 'hidden',
    width: '90%',
  },
  modalClose: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 10,
  },
  modalFluid: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    overflow: 'hidden',
    width: '90%',
  },
  modalOverlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },

  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#FFFFFF',
    opacity: 0.6,
  },

  paper: { backgroundColor: '#FFFFFF' },
  raise: {
    position: 'absolute',
    right: -8,
    top: -8,
  },
  regular: { fontFamily: PRIMARY_TEXT_FONT },
  rounded: {
    ...generateShadow(1),
    borderRadius: 5,
    overflow: 'hidden',
  },
  row: {
    alignItems: 'center',
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    paddingHorizontal: variables.mediumGutter,
    paddingVertical: variables.mediumGutter,
  },
  rowContainer: {
    backgroundColor: 'white',
    width: ROW_WIDTH,
  },
  rowContainerHorizontal: {
    ...generateShadow(5),
    ...vendorCard,
    backgroundColor: 'white',
    borderRadius: 6,
    marginHorizontal: 10,
    width: HORIZONTAL_ROW_WIDTH,
  },
  rowFixed: {
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
    minHeight: 115,
  },
  rowImage: { ...defaultImageSize },
  rowImageContainer: {
    backgroundColor: '#F2F2F2',
    borderRadius: 6,
    overflow: 'hidden',
  },
  rowImageSmall: { height: 40, width: 40 },
  rowText: {
    ...variables.heading5,
    lineHeight: 18,
  },

  screen: {
    backgroundColor: BACKDROP_COLOR,
    flex: 1,
  },
  sectionDivider: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 5,
  },
  sectionHeader: {
    backgroundColor: BACKDROP_COLOR,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: variables.smallGutter,
    paddingTop: variables.mediumGutter,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  seeMoreButton: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'gray',
    borderRadius: 15,
    marginBottom: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    position: 'absolute',
    top: -30,
    zIndex: 100,
    ...generateShadow(3),
  },
  separator: {
    backgroundColor: '#F2F2F2',
    height: 1,
    marginHorizontal: 10,
  },
  separator2: {
    backgroundColor: '#F2F2F2',
    height: 1,
  },
  separatorVertical: {
    backgroundColor: '#F2F2F2',
    height: '100%',
    marginVertical: 10,
    width: 1,
  },
  shadow: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  slider: {
    height: 80,
    width: SLIDER_WIDTH,
  },
  sliderContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 150,
    marginHorizontal: variables.mediumGutter,
    marginTop: 10,
    ...generateShadow(3),
  },
  sliderContainer2: {
    alignItems: 'center',
    height: 110,
    marginTop: 10,
  },
  sliderStep: {
    bottom: 25,
    marginHorizontal: variables.mediumGutter,
    paddingHorizontal: variables.smallGutter,
    position: 'absolute',
    width: width - 60,
  },
  sliderTitle: {
    alignItems: 'center',
    borderBottomWidth: 0.4,
    borderColor: Colors.gray4,
    padding: variables.mediumGutter,
    width: SLIDER_WIDTH,
  },
  smGutter: {
    padding: variables.smallGutter,
  },
  smGutterBottom: {
    paddingBottom: variables.smallGutter,
  },
  smGutterBottomMdHorizontal: {
    paddingBottom: variables.smallGutter,
    paddingHorizontal: variables.mediumGutter,
  },
  smGutterBottomSmHorizontal: {
    paddingBottom: variables.smallGutter,
    paddingHorizontal: variables.smallGutter,
  },
  smGutterHorizontal: {
    paddingHorizontal: variables.smallGutter,
  },
  smGutterLeft: {
    paddingLeft: variables.smallGutter,
  },
  smGutterRight: {
    paddingRight: variables.smallGutter,
  },
  smGutterTop: {
    paddingTop: variables.smallGutter,
  },
  smGutterVertical: {
    paddingVertical: variables.smallGutter,
  },
  smGutterVerticalMdHorizontal: {
    paddingHorizontal: variables.mediumGutter,
    paddingVertical: variables.smallGutter,
  },
  smGutterVerticalMdRight: {
    paddingRight: variables.mediumGutter,
    paddingVertical: variables.smallGutter,
  },
  smMargin: {
    margin: variables.smallGutter,
  },
  smMarginHorizontal: {
    marginHorizontal: variables.smallGutter,
  },
  smMarginRight: {
    marginRight: variables.smallGutter,
  },
  smMarginVertical: {
    marginVertical: variables.smallGutter,
  },
  smdMarginLeft: { marginLeft: 10 },
  smdMarginRight: { marginRight: 10 },
  spaceBetween: { ...spaceBetween },

  subheading1: {
    ...variables.subheading1,
  },
  subheading2: {
    ...variables.subheading2,
  },
  subheading3: {
    ...variables.subheading3,
  },
  switch : {
    height: 30,
    width: 50,
  },

  tabBar: {
    borderRadius: 5,
  },
  tabBarBadge: {
    backgroundColor: Colors.primary,
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    height: 10,
    marginLeft: 2,
    minWidth: 10,
    width: 10,
  },
  tabBarIndicator: { backgroundColor: Colors.primary },
  tabBarLabel: {
    fontFamily: PRIMARY_TEXT_FONT_SEMIBOLD,
    fontSize: 12,
    textAlign: 'center',
  },
  tableRow: {
    ...spaceBetween,
    flexDirection: 'row',
    marginBottom: 8,
  },
  tableSeparator: {
    alignSelf: 'stretch',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: variables.lineColor,
    paddingTop: 0,
  },

  text1: {
    ...variables.text1,
    lineHeight: calculateLineHeight(variables.text1.fontSize),
  },
  text2: {
    ...variables.text2,
    lineHeight: calculateLineHeight(variables.text2.fontSize),
  },
  text3: {
    ...variables.text3,
    lineHeight: calculateLineHeight(variables.text3.fontSize),
  },
  text4: {
    ...variables.text4,
    lineHeight: calculateLineHeight(variables.text4.fontSize),
  },
  text5: {
    ...variables.text5,
    lineHeight: calculateLineHeight(variables.text5.fontSize),
  },

  textAlignCenter: { textAlign: 'center' },
  textAlignJustify: { textAlign: 'justify' },
  textAlignRight: { textAlign: 'right' },
  textDanger: { color: Colors.danger },
  textDefault: { color: '#333333' },
  textInfo: { color: Colors.info },
  textLight: { color: '#FFF' },
  textLight1: {
    ...variables.caption1,
    color: '#333333',
  },
  textLight2: {
    ...variables.caption2,
    color: '#333333',
  },
  textLight3: {
    ...variables.caption3,
    color: '#333333',
  },
  textMuted: { color: Colors.gray3 },
  textOrange: { color: Colors.orange },
  textPrimary: { color: Colors.primary },
  textSuccess: { color: Colors.success },
  textWarning: { color: '#F6A102' },

  underline: {
    textDecorationLine: 'underline',
  },

  verticalCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  verticalEnd: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  verticalEvenly: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  verticalHCenter: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  verticalStretchCenter: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  verticalVCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  xlgGutterBottom: {
    paddingBottom: 75,
  },
  xlgGutterBottomMdGutterTop: {
    paddingBottom: 75,
    paddingTop: variables.mediumGutter,
  },
  xlgMarginBottom: {
    marginBottom: 80,
  },
  sheetContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
});

export default styles;
