/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.account_service = (function() {

    /**
     * Namespace account_service.
     * @exports account_service
     * @namespace
     */
    var account_service = {};

    /**
     * ASResult enum.
     * @name account_service.ASResult
     * @enum {number}
     * @property {number} Success=0 Success value
     * @property {number} InternalError=1 InternalError value
     * @property {number} Relogin=2 Relogin value
     * @property {number} ShouldUseAccountLogin=3 ShouldUseAccountLogin value
     * @property {number} AccountNotExist=4 AccountNotExist value
     * @property {number} WrongPassword=5 WrongPassword value
     * @property {number} TokenCheckFailed=6 TokenCheckFailed value
     * @property {number} SMSSendFailed=7 SMSSendFailed value
     * @property {number} SMSCodeError=8 SMSCodeError value
     * @property {number} DeviceNotExist=9 DeviceNotExist value
     * @property {number} AccountExist=10 AccountExist value
     * @property {number} DeviceRebind=11 DeviceRebind value
     * @property {number} AccountRebind=12 AccountRebind value
     * @property {number} PhoneRebind=13 PhoneRebind value
     * @property {number} ThirdRebind=14 ThirdRebind value
     * @property {number} AccountBanned=15 AccountBanned value
     * @property {number} LoginError=16 LoginError value
     * @property {number} DeviceBindTooMuch=17 DeviceBindTooMuch value
     * @property {number} AppIdError=18 AppIdError value
     * @property {number} SecretkeyError=19 SecretkeyError value
     * @property {number} ThirdRegisterError=20 ThirdRegisterError value
     * @property {number} ThirdCheckInError=21 ThirdCheckInError value
     * @property {number} ThirdCheckOutError=22 ThirdCheckOutError value
     */
    account_service.ASResult = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Success"] = 0;
        values[valuesById[1] = "InternalError"] = 1;
        values[valuesById[2] = "Relogin"] = 2;
        values[valuesById[3] = "ShouldUseAccountLogin"] = 3;
        values[valuesById[4] = "AccountNotExist"] = 4;
        values[valuesById[5] = "WrongPassword"] = 5;
        values[valuesById[6] = "TokenCheckFailed"] = 6;
        values[valuesById[7] = "SMSSendFailed"] = 7;
        values[valuesById[8] = "SMSCodeError"] = 8;
        values[valuesById[9] = "DeviceNotExist"] = 9;
        values[valuesById[10] = "AccountExist"] = 10;
        values[valuesById[11] = "DeviceRebind"] = 11;
        values[valuesById[12] = "AccountRebind"] = 12;
        values[valuesById[13] = "PhoneRebind"] = 13;
        values[valuesById[14] = "ThirdRebind"] = 14;
        values[valuesById[15] = "AccountBanned"] = 15;
        values[valuesById[16] = "LoginError"] = 16;
        values[valuesById[17] = "DeviceBindTooMuch"] = 17;
        values[valuesById[18] = "AppIdError"] = 18;
        values[valuesById[19] = "SecretkeyError"] = 19;
        values[valuesById[20] = "ThirdRegisterError"] = 20;
        values[valuesById[21] = "ThirdCheckInError"] = 21;
        values[valuesById[22] = "ThirdCheckOutError"] = 22;
        return values;
    })();

    account_service.DeviceInfo = (function() {

        /**
         * Properties of a DeviceInfo.
         * @memberof account_service
         * @interface IDeviceInfo
         * @property {string|null} [key] DeviceInfo key
         * @property {string|null} [value] DeviceInfo value
         */

        /**
         * Constructs a new DeviceInfo.
         * @memberof account_service
         * @classdesc Represents a DeviceInfo.
         * @implements IDeviceInfo
         * @constructor
         * @param {account_service.IDeviceInfo=} [properties] Properties to set
         */
        function DeviceInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeviceInfo key.
         * @member {string} key
         * @memberof account_service.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.key = "";

        /**
         * DeviceInfo value.
         * @member {string} value
         * @memberof account_service.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.value = "";

        /**
         * Creates a new DeviceInfo instance using the specified properties.
         * @function create
         * @memberof account_service.DeviceInfo
         * @static
         * @param {account_service.IDeviceInfo=} [properties] Properties to set
         * @returns {account_service.DeviceInfo} DeviceInfo instance
         */
        DeviceInfo.create = function create(properties) {
            return new DeviceInfo(properties);
        };

        /**
         * Encodes the specified DeviceInfo message. Does not implicitly {@link account_service.DeviceInfo.verify|verify} messages.
         * @function encode
         * @memberof account_service.DeviceInfo
         * @static
         * @param {account_service.IDeviceInfo} message DeviceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified DeviceInfo message, length delimited. Does not implicitly {@link account_service.DeviceInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account_service.DeviceInfo
         * @static
         * @param {account_service.IDeviceInfo} message DeviceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeviceInfo message from the specified reader or buffer.
         * @function decode
         * @memberof account_service.DeviceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account_service.DeviceInfo} DeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.account_service.DeviceInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeviceInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account_service.DeviceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account_service.DeviceInfo} DeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeviceInfo message.
         * @function verify
         * @memberof account_service.DeviceInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a DeviceInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account_service.DeviceInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account_service.DeviceInfo} DeviceInfo
         */
        DeviceInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.account_service.DeviceInfo)
                return object;
            var message = new $root.account_service.DeviceInfo();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a DeviceInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account_service.DeviceInfo
         * @static
         * @param {account_service.DeviceInfo} message DeviceInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.value = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this DeviceInfo to JSON.
         * @function toJSON
         * @memberof account_service.DeviceInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeviceInfo;
    })();

    account_service.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof account_service
         * @interface ILoginRequest
         * @property {string|null} [loginType] LoginRequest loginType
         * @property {string|null} [appId] LoginRequest appId
         * @property {string|null} [userName] LoginRequest userName
         * @property {string|null} [password] LoginRequest password
         * @property {string|null} [provider] LoginRequest provider
         * @property {string|null} [deviceId] LoginRequest deviceId
         * @property {Array.<account_service.IDeviceInfo>|null} [dInfos] LoginRequest dInfos
         * @property {string|null} [protocol] LoginRequest protocol
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof account_service
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {account_service.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            this.dInfos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest loginType.
         * @member {string} loginType
         * @memberof account_service.LoginRequest
         * @instance
         */
        LoginRequest.prototype.loginType = "";

        /**
         * LoginRequest appId.
         * @member {string} appId
         * @memberof account_service.LoginRequest
         * @instance
         */
        LoginRequest.prototype.appId = "";

        /**
         * LoginRequest userName.
         * @member {string} userName
         * @memberof account_service.LoginRequest
         * @instance
         */
        LoginRequest.prototype.userName = "";

        /**
         * LoginRequest password.
         * @member {string} password
         * @memberof account_service.LoginRequest
         * @instance
         */
        LoginRequest.prototype.password = "";

        /**
         * LoginRequest provider.
         * @member {string} provider
         * @memberof account_service.LoginRequest
         * @instance
         */
        LoginRequest.prototype.provider = "";

        /**
         * LoginRequest deviceId.
         * @member {string} deviceId
         * @memberof account_service.LoginRequest
         * @instance
         */
        LoginRequest.prototype.deviceId = "";

        /**
         * LoginRequest dInfos.
         * @member {Array.<account_service.IDeviceInfo>} dInfos
         * @memberof account_service.LoginRequest
         * @instance
         */
        LoginRequest.prototype.dInfos = $util.emptyArray;

        /**
         * LoginRequest protocol.
         * @member {string} protocol
         * @memberof account_service.LoginRequest
         * @instance
         */
        LoginRequest.prototype.protocol = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof account_service.LoginRequest
         * @static
         * @param {account_service.ILoginRequest=} [properties] Properties to set
         * @returns {account_service.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link account_service.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof account_service.LoginRequest
         * @static
         * @param {account_service.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.loginType != null && Object.hasOwnProperty.call(message, "loginType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.loginType);
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appId);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userName);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.password);
            if (message.provider != null && Object.hasOwnProperty.call(message, "provider"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.provider);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.deviceId);
            if (message.dInfos != null && message.dInfos.length)
                for (var i = 0; i < message.dInfos.length; ++i)
                    $root.account_service.DeviceInfo.encode(message.dInfos[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.protocol);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link account_service.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account_service.LoginRequest
         * @static
         * @param {account_service.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof account_service.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account_service.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.account_service.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.loginType = reader.string();
                    break;
                case 2:
                    message.appId = reader.string();
                    break;
                case 3:
                    message.userName = reader.string();
                    break;
                case 4:
                    message.password = reader.string();
                    break;
                case 5:
                    message.provider = reader.string();
                    break;
                case 6:
                    message.deviceId = reader.string();
                    break;
                case 7:
                    if (!(message.dInfos && message.dInfos.length))
                        message.dInfos = [];
                    message.dInfos.push($root.account_service.DeviceInfo.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.protocol = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account_service.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account_service.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof account_service.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.loginType != null && message.hasOwnProperty("loginType"))
                if (!$util.isString(message.loginType))
                    return "loginType: string expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.provider != null && message.hasOwnProperty("provider"))
                if (!$util.isString(message.provider))
                    return "provider: string expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.dInfos != null && message.hasOwnProperty("dInfos")) {
                if (!Array.isArray(message.dInfos))
                    return "dInfos: array expected";
                for (var i = 0; i < message.dInfos.length; ++i) {
                    var error = $root.account_service.DeviceInfo.verify(message.dInfos[i]);
                    if (error)
                        return "dInfos." + error;
                }
            }
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                if (!$util.isString(message.protocol))
                    return "protocol: string expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account_service.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account_service.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.account_service.LoginRequest)
                return object;
            var message = new $root.account_service.LoginRequest();
            if (object.loginType != null)
                message.loginType = String(object.loginType);
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.password != null)
                message.password = String(object.password);
            if (object.provider != null)
                message.provider = String(object.provider);
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.dInfos) {
                if (!Array.isArray(object.dInfos))
                    throw TypeError(".account_service.LoginRequest.dInfos: array expected");
                message.dInfos = [];
                for (var i = 0; i < object.dInfos.length; ++i) {
                    if (typeof object.dInfos[i] !== "object")
                        throw TypeError(".account_service.LoginRequest.dInfos: object expected");
                    message.dInfos[i] = $root.account_service.DeviceInfo.fromObject(object.dInfos[i]);
                }
            }
            if (object.protocol != null)
                message.protocol = String(object.protocol);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account_service.LoginRequest
         * @static
         * @param {account_service.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.dInfos = [];
            if (options.defaults) {
                object.loginType = "";
                object.appId = "";
                object.userName = "";
                object.password = "";
                object.provider = "";
                object.deviceId = "";
                object.protocol = "";
            }
            if (message.loginType != null && message.hasOwnProperty("loginType"))
                object.loginType = message.loginType;
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.provider != null && message.hasOwnProperty("provider"))
                object.provider = message.provider;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.dInfos && message.dInfos.length) {
                object.dInfos = [];
                for (var j = 0; j < message.dInfos.length; ++j)
                    object.dInfos[j] = $root.account_service.DeviceInfo.toObject(message.dInfos[j], options);
            }
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                object.protocol = message.protocol;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof account_service.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    account_service.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof account_service
         * @interface ILoginResponse
         * @property {number|null} [ret] LoginResponse ret
         * @property {number|Long|null} [uid] LoginResponse uid
         * @property {string|null} [token] LoginResponse token
         * @property {string|null} [bindPhone] LoginResponse bindPhone
         * @property {Array.<string>|null} [ips] LoginResponse ips
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof account_service
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {account_service.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            this.ips = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse ret.
         * @member {number} ret
         * @memberof account_service.LoginResponse
         * @instance
         */
        LoginResponse.prototype.ret = 0;

        /**
         * LoginResponse uid.
         * @member {number|Long} uid
         * @memberof account_service.LoginResponse
         * @instance
         */
        LoginResponse.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * LoginResponse token.
         * @member {string} token
         * @memberof account_service.LoginResponse
         * @instance
         */
        LoginResponse.prototype.token = "";

        /**
         * LoginResponse bindPhone.
         * @member {string} bindPhone
         * @memberof account_service.LoginResponse
         * @instance
         */
        LoginResponse.prototype.bindPhone = "";

        /**
         * LoginResponse ips.
         * @member {Array.<string>} ips
         * @memberof account_service.LoginResponse
         * @instance
         */
        LoginResponse.prototype.ips = $util.emptyArray;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof account_service.LoginResponse
         * @static
         * @param {account_service.ILoginResponse=} [properties] Properties to set
         * @returns {account_service.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link account_service.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof account_service.LoginResponse
         * @static
         * @param {account_service.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ret != null && Object.hasOwnProperty.call(message, "ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.uid);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
            if (message.bindPhone != null && Object.hasOwnProperty.call(message, "bindPhone"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.bindPhone);
            if (message.ips != null && message.ips.length)
                for (var i = 0; i < message.ips.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.ips[i]);
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link account_service.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account_service.LoginResponse
         * @static
         * @param {account_service.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof account_service.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account_service.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.account_service.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = reader.int32();
                    break;
                case 2:
                    message.uid = reader.uint64();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                case 4:
                    message.bindPhone = reader.string();
                    break;
                case 5:
                    if (!(message.ips && message.ips.length))
                        message.ips = [];
                    message.ips.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account_service.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account_service.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof account_service.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ret != null && message.hasOwnProperty("ret"))
                if (!$util.isInteger(message.ret))
                    return "ret: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.bindPhone != null && message.hasOwnProperty("bindPhone"))
                if (!$util.isString(message.bindPhone))
                    return "bindPhone: string expected";
            if (message.ips != null && message.hasOwnProperty("ips")) {
                if (!Array.isArray(message.ips))
                    return "ips: array expected";
                for (var i = 0; i < message.ips.length; ++i)
                    if (!$util.isString(message.ips[i]))
                        return "ips: string[] expected";
            }
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account_service.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account_service.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.account_service.LoginResponse)
                return object;
            var message = new $root.account_service.LoginResponse();
            if (object.ret != null)
                message.ret = object.ret | 0;
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = true;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber(true);
            if (object.token != null)
                message.token = String(object.token);
            if (object.bindPhone != null)
                message.bindPhone = String(object.bindPhone);
            if (object.ips) {
                if (!Array.isArray(object.ips))
                    throw TypeError(".account_service.LoginResponse.ips: array expected");
                message.ips = [];
                for (var i = 0; i < object.ips.length; ++i)
                    message.ips[i] = String(object.ips[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account_service.LoginResponse
         * @static
         * @param {account_service.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ips = [];
            if (options.defaults) {
                object.ret = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.token = "";
                object.bindPhone = "";
            }
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = message.ret;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber(true) : message.uid;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.bindPhone != null && message.hasOwnProperty("bindPhone"))
                object.bindPhone = message.bindPhone;
            if (message.ips && message.ips.length) {
                object.ips = [];
                for (var j = 0; j < message.ips.length; ++j)
                    object.ips[j] = message.ips[j];
            }
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof account_service.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    return account_service;
})();

module.exports = $root;
