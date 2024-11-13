import webpack from 'webpack';


export default {
    webpack: (config) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                process: 'process/browser',
            })
        );
        return config;
    },
};
