var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, surname, age, solarschip_holder) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.solarschip_holder = solarschip_holder;
    }
    Student.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Surname: ").concat(this.surname, ", Age: ").concat(this.age, ", Solar Chip Holder: ").concat(this.solarschip_holder));
    };
    return Student;
}());
var student1 = new Student('Sergey', 'Ivanow', 19, true);
var student2 = new Student('Anna', 'Petrova', 20, false);
var student3 = new Student('Dmitry', 'Kovalenko', 21, true);
var student4 = new Student('Dmytro', 'Khomenko', 18, true);
student4.displayInfo();
var student5 = new Student('Vlad', 'Khomenko', 16, false);
student5.displayInfo();
var Component = /** @class */ (function () {
    function Component(selector) {
        this.$el = document.querySelector(selector);
    }
    Component.prototype.blockHide = function () {
        this.$el.style.display = 'none';
    };
    Component.prototype.editColor = function (color) {
        this.$el.style.background = color;
    };
    Component.prototype.editWidth = function () {
        this.$el.style.margin = '0 auto';
    };
    return Component;
}());
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box(options) {
        var _this = _super.call(this, options.selector) || this;
        _this.$el.style.width = options.width + 'px';
        _this.$el.style.height = options.height + 'px';
        _this.$el.style.background = options.color;
        return _this;
    }
    return Box;
}(Component));
var box1 = new Box({
    selector: '#box1',
    width: 1000,
    height: 50,
    color: 'blue'
});
