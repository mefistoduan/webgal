module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.0.162:19080/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                }
            }
        }
    },
    // 输出文件目录
    outputDir: 'D:/wwwroot/test/new_back/static_pc',
};
