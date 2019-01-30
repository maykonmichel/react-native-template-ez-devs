const create = (fontSize, fontHeight, fontFamily) => ({
  fontSize,
  fontHeight,
  fontFamily
});

export default {
  display4: create(112, 128),
  display3: create(56, 64),
  display2: create(45, 52),
  display1: create(34, 40),
  title1: create(28, 34),
  title2: create(22, 28),
  title3: create(20, 25),
  headline: create(18, 23),
  body: create(17, 22),
  callout: create(16, 21),
  subhead: create(15, 20),
  footnote: create(13, 18),
  caption1: create(12, 16),
  caption2: create(11, 13)
};
