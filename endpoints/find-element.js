import Endpoint from '.';

class FindElement extends Endpoint {
    constructor(data) {
        super(data);
    }
    static express(router) {
        router.post('/session/:sid/element', function(req, res, next) {
            req.endpoint = new FindElement(req.body);
            next();
        });
    }
    static transform(data) {
        return data;
    }
};

export default Endpoint.register(FindElement);
