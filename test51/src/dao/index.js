export default {
    getProfile (data, done, error) {
        mk.ajax({
            url: '/inc/quanzi/v2/quanzi/getTheme',
            data: data,
            dataType: 'json',
            success: done,
            error: error
        });
    }
};
