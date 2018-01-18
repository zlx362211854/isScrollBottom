/**
 * @Author zlx
 * @Date 2018/1/18 下午5:07
 */

var isScrollBottom = function (id) {
    var container = document.getElementById(id);
    var height = container.clientHeight;
    var result = false;

    var child = container.childNodes;

    for (var i = 0; i < child.length; i++) {
        if (child[i].nodeName == "#text" && !/\s/.test(child.nodeValue)) {
            container.removeChild(child[i])
        }
    }

    this.height = height;
    this.clinetHeight = child[0] && child[0].clientHeight;
    var that = this;
    // 监听
    this.listen = function (cb) {
        container.addEventListener('scroll', function () {
            that.offset = container.scrollTop;
            result = that.compare();
            cb(result);
        })
    };
};
isScrollBottom.prototype.compare = function () {
    var offset = this.offset, clinetHeight = this.clinetHeight, height = this.height;
    if (offset > clinetHeight - height) {
        return true
    } else {
        return false
    }
}