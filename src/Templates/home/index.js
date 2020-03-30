import PageTemplate from '@codeinc.mx/page-template-component/js/PageTemplate';
import WebpSupportPlugin from '@codeinc.mx/background-manager/js/plugins/WebpSupportPlugin.js'

new PageTemplate({
  document,
  plugins: [
    new WebpSupportPlugin({
      noWebpSupportedClassName: 'webp--disabled'
    })
  ]
});