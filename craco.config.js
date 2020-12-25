const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@app': path.resolve(__dirname, 'src/'),
            '@store': path.resolve(__dirname, 'src/store/index'),
            '@components': path.resolve(__dirname, 'src/components/index'),
            '@modules': path.resolve(__dirname, 'src/modules/'),
            '@pages': path.resolve(__dirname, 'src/pages/')
        }
    }
};
