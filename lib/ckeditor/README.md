TAO Fork considerations of CKEditor 4
==================================================
### Development for TAO
For updating ckeditor use [`oat-sa/ckeditor-dev`](https://github.com/oat-sa/ckeditor-dev).
After build of [`oat-sa/ckeditor-dev`](https://github.com/oat-sa/ckeditor-dev) copy files from `release/ckeditor-reduced` into `lib/ckeditor/` folder of this repository.
### Using in TAO
Can be configured by [`ui/ckeditor/ckConfigurator`](https://github.com/oat-sa/tao-core-ui-fe/blob/master/src/ckeditor/ckConfigurator.js)
#### TAO Skin
- If you need to modify TAO skin, you'll find the SASS source files in [`@oat-sa/tao-core-ui-fe`](https://github.com/oat-sa/tao-core-ui-fe/tree/master/scss/ckeditor/skins/tao/scss). They are not in this repo. 
- To compile, use the grunt task `npm run buildScss`
- Once compiled, copy the css files from `tao-core-ui-fe/css/ckeditor/skins/tao/*` into the [`skins/tao/`](https://github.com/oat-sa/ckeditor-dev/tree/develop/skins/tao) folder of `oat-sa/ckeditor-dev` repository. This will avoid accidental override of the skin when moving a new CK build into TAO.
#### Icons
Used icons from tao-font for buttons. Map for restyled icons in `lib/ckeditor/assets/ck-editor-classes.ini` of this repository.
If you need add new icon:
1. add icon in tao-font by taoDevTools - [guide](https://hub.taotesting.com/styleguide/icons)
2. add icon in [`_ck-icons.scss`](https://github.com/oat-sa/tao-core-ui-fe/blob/master/scss/ckeditor/skins/tao/scss/inc/_ck-icons.scss)