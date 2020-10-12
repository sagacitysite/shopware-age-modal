// Import all necessary Storefront plugins and scss files
import Modal from './modal/modal.plugin';

// Register the module via PluginManager
const PluginManager = window.PluginManager;
PluginManager.register('Modal', Modal, '[data-age-modal]');

// Necessary for the webpack hot module reloading server
if (module.hot) {
    module.hot.accept();
}
