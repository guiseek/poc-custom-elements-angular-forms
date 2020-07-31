module.exports = {
  name: 'ui-forms',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/forms',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
