import * as $protobuf from "protobufjs";
/** Namespace account_service. */
export namespace account_service {

    /** ASResult enum. */
    enum ASResult {
        Success = 0,
        InternalError = 1,
        Relogin = 2,
        ShouldUseAccountLogin = 3,
        AccountNotExist = 4,
        WrongPassword = 5,
        TokenCheckFailed = 6,
        SMSSendFailed = 7,
        SMSCodeError = 8,
        DeviceNotExist = 9,
        AccountExist = 10,
        DeviceRebind = 11,
        AccountRebind = 12,
        PhoneRebind = 13,
        ThirdRebind = 14,
        AccountBanned = 15,
        LoginError = 16,
        DeviceBindTooMuch = 17,
        AppIdError = 18,
        SecretkeyError = 19,
        ThirdRegisterError = 20,
        ThirdCheckInError = 21,
        ThirdCheckOutError = 22
    }

    /** Properties of a DeviceInfo. */
    interface IDeviceInfo {

        /** DeviceInfo key */
        key?: (string|null);

        /** DeviceInfo value */
        value?: (string|null);
    }

    /** Represents a DeviceInfo. */
    class DeviceInfo implements IDeviceInfo {

        /**
         * Constructs a new DeviceInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: account_service.IDeviceInfo);

        /** DeviceInfo key. */
        public key: string;

        /** DeviceInfo value. */
        public value: string;

        /**
         * Creates a new DeviceInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceInfo instance
         */
        public static create(properties?: account_service.IDeviceInfo): account_service.DeviceInfo;

        /**
         * Encodes the specified DeviceInfo message. Does not implicitly {@link account_service.DeviceInfo.verify|verify} messages.
         * @param message DeviceInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: account_service.IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceInfo message, length delimited. Does not implicitly {@link account_service.DeviceInfo.verify|verify} messages.
         * @param message DeviceInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: account_service.IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account_service.DeviceInfo;

        /**
         * Decodes a DeviceInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account_service.DeviceInfo;

        /**
         * Verifies a DeviceInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceInfo
         */
        public static fromObject(object: { [k: string]: any }): account_service.DeviceInfo;

        /**
         * Creates a plain object from a DeviceInfo message. Also converts values to other types if specified.
         * @param message DeviceInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: account_service.DeviceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest loginType */
        loginType?: (string|null);

        /** LoginRequest appId */
        appId?: (string|null);

        /** LoginRequest userName */
        userName?: (string|null);

        /** LoginRequest password */
        password?: (string|null);

        /** LoginRequest provider */
        provider?: (string|null);

        /** LoginRequest deviceId */
        deviceId?: (string|null);

        /** LoginRequest dInfos */
        dInfos?: (account_service.IDeviceInfo[]|null);

        /** LoginRequest pro */
        pro?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: account_service.ILoginRequest);

        /** LoginRequest loginType. */
        public loginType: string;

        /** LoginRequest appId. */
        public appId: string;

        /** LoginRequest userName. */
        public userName: string;

        /** LoginRequest password. */
        public password: string;

        /** LoginRequest provider. */
        public provider: string;

        /** LoginRequest deviceId. */
        public deviceId: string;

        /** LoginRequest dInfos. */
        public dInfos: account_service.IDeviceInfo[];

        /** LoginRequest pro. */
        public pro: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: account_service.ILoginRequest): account_service.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link account_service.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: account_service.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link account_service.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: account_service.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account_service.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account_service.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): account_service.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: account_service.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse ret */
        ret?: (number|null);

        /** LoginResponse uid */
        uid?: (number|Long|null);

        /** LoginResponse token */
        token?: (string|null);

        /** LoginResponse bindPhone */
        bindPhone?: (string|null);

        /** LoginResponse ips */
        ips?: (string[]|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: account_service.ILoginResponse);

        /** LoginResponse ret. */
        public ret: number;

        /** LoginResponse uid. */
        public uid: (number|Long);

        /** LoginResponse token. */
        public token: string;

        /** LoginResponse bindPhone. */
        public bindPhone: string;

        /** LoginResponse ips. */
        public ips: string[];

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: account_service.ILoginResponse): account_service.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link account_service.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: account_service.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link account_service.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: account_service.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account_service.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account_service.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): account_service.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: account_service.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
