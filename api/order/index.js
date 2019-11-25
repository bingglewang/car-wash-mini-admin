import urlRequest from '@/util/request'

/**
 * 获取用户订单列表
 * @param {data}
 */
const getUserOrderList = (id, data, callback) =>
	{
		urlRequest.urlRequest('sso/update/' + id, data, "GET", callback);
	}

export default {
	getUserOrderList
}
