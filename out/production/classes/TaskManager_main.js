(function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var intrinsics = Kotlin.kotlin.coroutines.experimental.intrinsics;
  var Exception = Kotlin.kotlin.Exception;
  var experimental = Kotlin.kotlin.coroutines.experimental;
  var Continuation = Kotlin.kotlin.coroutines.experimental.Continuation;
  var startCoroutine = Kotlin.kotlin.coroutines.experimental.startCoroutine_xtwlez$;
  AuthController.prototype = Object.create(Controller.prototype);
  AuthController.prototype.constructor = AuthController;
  UserController.prototype = Object.create(Controller.prototype);
  UserController.prototype.constructor = UserController;
  Users.prototype = Object.create(Model.prototype);
  Users.prototype.constructor = Users;
  function App() {
    this.express = require('express');
    this.bodyparser = require('body-parser');
    this.tool = null;
    this.tool = this.express();
    this.InitParsers_0();
    this.RouteOn_0();
  }
  function App$InitParsers$ObjectLiteral() {
    this.extended = false;
  }
  App$InitParsers$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  App.prototype.InitParsers_0 = function () {
    this.tool.use(this.bodyparser.urlencoded(new App$InitParsers$ObjectLiteral()));
    this.tool.use(this.bodyparser.json());
  };
  App.prototype.RouteOn_0 = function () {
    var route = new Route();
    this.tool.use(route.getRouter());
  };
  App.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'App',
    interfaces: []
  };
  function main$lambda(closure$port) {
    return function () {
      println('Listening on port ' + closure$port);
    };
  }
  function main(args) {
    var app = new App();
    var port = Config$config_getInstance().get_61zpoe$('port');
    var listen = app.tool.listen(port, main$lambda(port));
  }
  function AuthController(req, res) {
    Controller.call(this, req, res);
  }
  AuthController.prototype.login = function () {
  };
  AuthController.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AuthController',
    interfaces: [Controller]
  };
  function UserController(req, res) {
    Controller.call(this, req, res);
    this.model = new Users();
    this.passHash = require('password-hash');
  }
  function UserController$getAllUsers$lambda(this$UserController_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$UserController$getAllUsers$lambda(this$UserController_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$UserController$getAllUsers$lambda(this$UserController_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$UserController = this$UserController_0;
    this.local$res = void 0;
  }
  Coroutine$UserController$getAllUsers$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$UserController$getAllUsers$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$UserController$getAllUsers$lambda.prototype.constructor = Coroutine$UserController$getAllUsers$lambda;
  Coroutine$UserController$getAllUsers$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = Async$Companion_getInstance().await_t11jrl$(this.local$this$UserController.model.getAllUsers_mh5how$(''), this);
            if (this.result_0 === intrinsics.COROUTINE_SUSPENDED)
              return intrinsics.COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$res = this.result_0;
            return this.local$this$UserController.response_za3rmp$(this.local$res);
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  UserController.prototype.getAllUsers = function () {
    Async$Companion_getInstance().promiseAsync_lnyleu$(UserController$getAllUsers$lambda(this));
  };
  function UserController$login$lambda$ObjectLiteral(closure$user) {
    this.status = true;
    this.id = closure$user.v.id;
    this.firstName = closure$user.v.name;
    this.lastName = closure$user.v.last_name;
  }
  UserController$login$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function UserController$login$lambda$ObjectLiteral_0() {
    this.status = false;
    this.error = 'Login or password is incorrect';
  }
  UserController$login$lambda$ObjectLiteral_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function UserController$login$lambda(this$UserController_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$UserController$login$lambda(this$UserController_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$UserController$login$lambda(this$UserController_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$UserController = this$UserController_0;
    this.local$user = void 0;
  }
  Coroutine$UserController$login$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$UserController$login$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$UserController$login$lambda.prototype.constructor = Coroutine$UserController$login$lambda;
  Coroutine$UserController$login$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = Async$Companion_getInstance().await_t11jrl$(this.local$this$UserController.model.findUser_ytbaoo$(this.local$this$UserController.req.body.email), this);
            if (this.result_0 === intrinsics.COROUTINE_SUSPENDED)
              return intrinsics.COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$user = {v: this.result_0};
            this.local$user.v = this.local$user.v[0];
            if (this.local$user.v != null) {
              if (this.local$this$UserController.passHash.verify(this.local$user.v.password, this.local$this$UserController.req.body.password)) {
                this.local$this$UserController.response_za3rmp$(new UserController$login$lambda$ObjectLiteral(this.local$user));
                return;
              }
               else {
                this.state_0 = 3;
                continue;
              }
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return this.local$this$UserController.response_za3rmp$(new UserController$login$lambda$ObjectLiteral_0());
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  UserController.prototype.login = function () {
    Async$Companion_getInstance().promiseAsync_lnyleu$(UserController$login$lambda(this));
  };
  function UserController$registration$lambda$ObjectLiteral() {
    this.status = false;
    this.error = 'Not all fields are complete';
  }
  UserController$registration$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function UserController$registration$lambda$ObjectLiteral_0() {
    this.status = false;
    this.error = 'This email is unavailable';
  }
  UserController$registration$lambda$ObjectLiteral_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function UserController$registration$lambda$ObjectLiteral_1() {
    this.status = true;
  }
  UserController$registration$lambda$ObjectLiteral_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function UserController$registration$lambda(this$UserController_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$UserController$registration$lambda(this$UserController_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$UserController$registration$lambda(this$UserController_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$UserController = this$UserController_0;
    this.local$name = void 0;
    this.local$lastName = void 0;
    this.local$email = void 0;
    this.local$pass = void 0;
    this.local$users = void 0;
    this.local$newUser = void 0;
  }
  Coroutine$UserController$registration$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$UserController$registration$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$UserController$registration$lambda.prototype.constructor = Coroutine$UserController$registration$lambda;
  Coroutine$UserController$registration$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$name = this.local$this$UserController.req.body.name;
            this.local$lastName = this.local$this$UserController.req.body.last_name;
            this.local$email = this.local$this$UserController.req.body.email;
            this.local$pass = this.local$this$UserController.req.body.password;
            if (this.local$name == null || this.local$lastName == null || this.local$email == null || this.local$pass == null) {
              this.local$this$UserController.response_za3rmp$(new UserController$registration$lambda$ObjectLiteral());
              return;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = Async$Companion_getInstance().await_t11jrl$(this.local$this$UserController.model.findUser_ytbaoo$(this.local$email), this);
            if (this.result_0 === intrinsics.COROUTINE_SUSPENDED)
              return intrinsics.COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$users = this.result_0;
            if (this.local$users.length != 0) {
              this.local$this$UserController.response_za3rmp$(new UserController$registration$lambda$ObjectLiteral_0());
              return;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = Async$Companion_getInstance().await_t11jrl$(this.local$this$UserController.model.newUser_yyvogy$(this.local$name, this.local$lastName, this.local$this$UserController.passHash.generate(this.local$pass), this.local$email), this);
            if (this.result_0 === intrinsics.COROUTINE_SUSPENDED)
              return intrinsics.COROUTINE_SUSPENDED;
            break;
          case 5:
            this.local$newUser = this.result_0;
            return this.local$this$UserController.response_za3rmp$(new UserController$registration$lambda$ObjectLiteral_1());
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  UserController.prototype.registration = function () {
    Async$Companion_getInstance().promiseAsync_lnyleu$(UserController$registration$lambda(this));
  };
  UserController.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'UserController',
    interfaces: [Controller]
  };
  function Async() {
    Async$Companion_getInstance();
    this.temp = null;
  }
  Async.prototype.getUserName_mh5how$ = function (value) {
    try {
      var db = Database$Companion_getInstance().getInstance();
      this.temp = db.pool.select('name').from('users');
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        console.log(e.message);
      }
       else
        throw e;
    }
    return Promise.resolve(this.temp);
  };
  function Async$Companion() {
    Async$Companion_instance = this;
  }
  function Async$Companion$await$lambda(this$await) {
    return function (it) {
      this$await.then(Kotlin.getCallableRef('resume', function ($receiver, value) {
        return $receiver.resume_11rb$(value);
      }.bind(null, it))).catch(Kotlin.getCallableRef('resumeWithException', function ($receiver, exception) {
        return $receiver.resumeWithException_tcv7n7$(exception);
      }.bind(null, it)));
    };
  }
  Async$Companion.prototype.await_t11jrl$ = function ($receiver, continuation) {
    return Kotlin.kotlin.coroutines.experimental.suspendCoroutine$f(Async$Companion$await$lambda($receiver))(continuation.facade);
  };
  function Async$Companion$promiseAsync$lambda$ObjectLiteral(closure$resolve, closure$reject) {
    this.closure$resolve = closure$resolve;
    this.closure$reject = closure$reject;
    this.context_s0wbc6$_0 = experimental.EmptyCoroutineContext;
  }
  Async$Companion$promiseAsync$lambda$ObjectLiteral.prototype.resume_11rb$ = function (value) {
    this.closure$resolve(value);
  };
  Async$Companion$promiseAsync$lambda$ObjectLiteral.prototype.resumeWithException_tcv7n7$ = function (exception) {
    this.closure$reject(exception);
  };
  Object.defineProperty(Async$Companion$promiseAsync$lambda$ObjectLiteral.prototype, 'context', {
    get: function () {
      return this.context_s0wbc6$_0;
    }
  });
  Async$Companion$promiseAsync$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [Continuation]
  };
  function Async$Companion$promiseAsync$lambda(closure$c) {
    return function (resolve, reject) {
      startCoroutine(closure$c, new Async$Companion$promiseAsync$lambda$ObjectLiteral(resolve, reject));
    };
  }
  Async$Companion.prototype.promiseAsync_lnyleu$ = function (c) {
    return new Promise(Async$Companion$promiseAsync$lambda(c));
  };
  Async$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Async$Companion_instance = null;
  function Async$Companion_getInstance() {
    if (Async$Companion_instance === null) {
      new Async$Companion();
    }
    return Async$Companion_instance;
  }
  Async.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Async',
    interfaces: []
  };
  function Config() {
    Config$config_getInstance();
  }
  function Config$config() {
    Config$config_instance = this;
    this.conf = require('config');
  }
  Config$config.prototype.get_61zpoe$ = function (name) {
    return this.conf.get(name);
  };
  Config$config.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'config',
    interfaces: []
  };
  var Config$config_instance = null;
  function Config$config_getInstance() {
    if (Config$config_instance === null) {
      new Config$config();
    }
    return Config$config_instance;
  }
  Config.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  function Controller(req, res) {
    this.req = req;
    this.res = res;
  }
  Controller.prototype.response_za3rmp$ = function (fields) {
    this.res.json(fields);
  };
  Controller.prototype.checkToken = function () {
  };
  Controller.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Controller',
    interfaces: []
  };
  function Database() {
    Database$Companion_getInstance();
    this.pool = null;
    this.knex_0 = require('knex');
    this.connection_0();
  }
  function Database$connection$ObjectLiteral() {
    this.client = 'mysql';
    this.connection = new Database$connection$ObjectLiteral$connection$ObjectLiteral();
  }
  function Database$connection$ObjectLiteral$connection$ObjectLiteral() {
    this.host = Config$config_getInstance().get_61zpoe$('db.hostname');
    this.user = Config$config_getInstance().get_61zpoe$('db.username');
    this.password = Config$config_getInstance().get_61zpoe$('db.password');
    this.database = Config$config_getInstance().get_61zpoe$('db.name');
  }
  Database$connection$ObjectLiteral$connection$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  Database$connection$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  Database.prototype.connection_0 = function () {
    this.pool = this.knex_0(new Database$connection$ObjectLiteral());
  };
  function Database$Companion() {
    Database$Companion_instance = this;
    this.instance_0 = null;
  }
  Database$Companion.prototype.getInstance = function () {
    if (this.instance_0 === null)
      this.instance_0 = new Database();
    return this.instance_0;
  };
  Database$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Database$Companion_instance = null;
  function Database$Companion_getInstance() {
    if (Database$Companion_instance === null) {
      new Database$Companion();
    }
    return Database$Companion_instance;
  }
  Database.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Database',
    interfaces: []
  };
  function Model() {
    this.db = Database$Companion_getInstance().getInstance();
  }
  Model.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Model',
    interfaces: []
  };
  function Migration() {
    this.db = Database$Companion_getInstance().getInstance();
  }
  function Migration$create$lambda(this$Migration_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Migration$create$lambda(this$Migration_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Migration$create$lambda(this$Migration_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Migration = this$Migration_0;
  }
  Coroutine$Migration$create$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Migration$create$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Migration$create$lambda.prototype.constructor = Coroutine$Migration$create$lambda;
  Coroutine$Migration$create$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = Async$Companion_getInstance().await_t11jrl$(createUsers(this.local$this$Migration.db), this);
            if (this.result_0 === intrinsics.COROUTINE_SUSPENDED)
              return intrinsics.COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = Async$Companion_getInstance().await_t11jrl$(createGroups(this.local$this$Migration.db), this);
            if (this.result_0 === intrinsics.COROUTINE_SUSPENDED)
              return intrinsics.COROUTINE_SUSPENDED;
            break;
          case 3:
            this.state_0 = 4;
            this.result_0 = Async$Companion_getInstance().await_t11jrl$(createTasks(this.local$this$Migration.db), this);
            if (this.result_0 === intrinsics.COROUTINE_SUSPENDED)
              return intrinsics.COROUTINE_SUSPENDED;
            break;
          case 4:
            this.state_0 = 5;
            this.result_0 = Async$Companion_getInstance().await_t11jrl$(createGroups2Users(this.local$this$Migration.db), this);
            if (this.result_0 === intrinsics.COROUTINE_SUSPENDED)
              return intrinsics.COROUTINE_SUSPENDED;
            break;
          case 5:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Migration.prototype.create = function () {
    Async$Companion_getInstance().promiseAsync_lnyleu$(Migration$create$lambda(this));
  };
  Migration.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Migration',
    interfaces: []
  };
  function createGroups$lambda(table) {
    table.increments();
    table.string('name', 100);
    table.string('type', 50);
    table.text('desc');
    table.string('icon');
    table.timestamps();
  }
  function createGroups(db) {
    var res = db.pool.schema.createTableIfNotExists('groups', createGroups$lambda);
    return Promise.resolve(res);
  }
  function createGroups2Users$lambda(table) {
    table.increments();
    table.integer('group_id');
    table.integer('user_id');
  }
  function createGroups2Users(db) {
    var res = db.pool.schema.createTableIfNotExists('groups2users', createGroups2Users$lambda);
    return Promise.resolve(res);
  }
  function createTasks$lambda(table) {
    table.increments();
    table.string('name', 200);
    table.text('description');
    table.dateTime('deadline');
    table.string('status', 50);
    table.integer('parent').defaultTo(0);
    table.integer('owner');
    table.integer('executor');
    table.integer('group').defaultTo(0);
    table.timestamps();
  }
  function createTasks(db) {
    var res = db.pool.schema.createTableIfNotExists('tasks', createTasks$lambda);
    return Promise.resolve(res);
  }
  function createUsers$lambda(table) {
    table.increments();
    table.string('name', 100);
    table.string('last_name', 100);
    table.string('email', 120).unique();
    table.string('password', 150);
    table.string('secretKey', 100);
    table.string('avatar_path');
    table.timestamps();
  }
  function createUsers(db) {
    var result = db.pool.schema.createTableIfNotExists('users', createUsers$lambda);
    return Promise.resolve(result);
  }
  function Tasks() {
  }
  Tasks.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Tasks',
    interfaces: []
  };
  function Users() {
    Model.call(this);
    this.firstName = '';
    this.age = 0;
    this.lastName = '';
    this.email = '';
    this.phone = '';
  }
  Users.prototype.getAllUsers_mh5how$ = function (value) {
    var result = null;
    try {
      result = this.db.pool.select('id', 'name').from('users');
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        console.log(e.message);
      }
       else
        throw e;
    }
    return Promise.resolve(result);
  };
  function Users$newUser$ObjectLiteral(closure$name, closure$lastName, closure$password, closure$email) {
    this.name = closure$name;
    this.last_name = closure$lastName;
    this.password = closure$password;
    this.email = closure$email;
  }
  Users$newUser$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  Users.prototype.newUser_yyvogy$ = function (name, lastName, password, email) {
    var result = null;
    try {
      result = this.db.pool('users').insert(new Users$newUser$ObjectLiteral(name, lastName, password, email));
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        console.log(e.message);
      }
       else
        throw e;
    }
    return Promise.resolve(result);
  };
  Users.prototype.findUser_ytbaoo$ = function (login) {
    var result = null;
    try {
      result = this.db.pool('users').select().where('email', login);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        e.message;
      }
       else
        throw e;
    }
    return Promise.resolve(result);
  };
  Users.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Users',
    interfaces: [Model]
  };
  function Route() {
    this.express_0 = require('express');
    this.router_0 = null;
    this.generalRoute_0 = null;
    this.generalRoute_0 = this.express_0.Router();
    this.router_0 = this.express_0.Router();
    this.router_0.use('/', this.MainRouter_0());
    this.router_0.use('/user', this.UserRouter_0());
    this.generalRoute_0.use('/v1', this.router_0);
    this.generalRoute_0.use('/auth', this.AuthRouter_0());
    this.generalRoute_0.use('/migration', this.MigrationRouter_0());
  }
  Route.prototype.getRouter = function () {
    return this.generalRoute_0;
  };
  function Route$AuthRouter$lambda(req, res) {
    var controller = new UserController(req, res);
    controller.login();
  }
  function Route$AuthRouter$lambda_0(req, res) {
    var controller = new UserController(req, res);
    controller.registration();
  }
  Route.prototype.AuthRouter_0 = function () {
    var auth = this.express_0.Router();
    auth.post('/login', Route$AuthRouter$lambda);
    auth.post('/registration', Route$AuthRouter$lambda_0);
    return auth;
  };
  function Route$MainRouter$lambda(f, res) {
    return res.send('hello');
  }
  Route.prototype.MainRouter_0 = function () {
    var main = this.express_0.Router();
    main.get('/', Route$MainRouter$lambda);
    return main;
  };
  function Route$UserRouter$lambda(req, res) {
    var controller = new UserController(req, res);
    controller.getAllUsers();
  }
  Route.prototype.UserRouter_0 = function () {
    var user = this.express_0.Router();
    user.get('/profile', Route$UserRouter$lambda);
    return user;
  };
  function Route$MigrationRouter$lambda(req, res) {
    var pass = Config$config_getInstance().get_61zpoe$('migration_pass');
    if (pass == req.query.pass) {
      var temp = new Migration();
      temp.create();
    }
    return res.send("migration's page");
  }
  Route.prototype.MigrationRouter_0 = function () {
    var migration = this.express_0.Router();
    migration.get('/create', Route$MigrationRouter$lambda);
    return migration;
  };
  Route.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Route',
    interfaces: []
  };
  _.App = App;
  _.main_kand9s$ = main;
  var package$controllers = _.controllers || (_.controllers = {});
  package$controllers.AuthController = AuthController;
  package$controllers.UserController = UserController;
  Object.defineProperty(Async, 'Companion', {
    get: Async$Companion_getInstance
  });
  var package$core = _.core || (_.core = {});
  package$core.Async = Async;
  Object.defineProperty(Config, 'config', {
    get: Config$config_getInstance
  });
  package$core.Config = Config;
  package$core.Controller = Controller;
  Object.defineProperty(Database, 'Companion', {
    get: Database$Companion_getInstance
  });
  package$core.Database = Database;
  package$core.Model = Model;
  var package$migrations = _.migrations || (_.migrations = {});
  package$migrations.Migration = Migration;
  package$migrations.createGroups_86eaif$ = createGroups;
  package$migrations.createGroups2Users_86eaif$ = createGroups2Users;
  package$migrations.createTasks_86eaif$ = createTasks;
  package$migrations.createUsers_86eaif$ = createUsers;
  var package$models = _.models || (_.models = {});
  package$models.Tasks = Tasks;
  package$models.Users = Users;
  var package$routes = _.routes || (_.routes = {});
  package$routes.Route = Route;
  main([]);
  Kotlin.defineModule('TaskManager_main', _);
  return _;
}(module.exports, require('kotlin')));
