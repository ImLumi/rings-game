
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model GameRoom
 * 
 */
export type GameRoom = $Result.DefaultSelection<Prisma.$GameRoomPayload>
/**
 * Model Puzzle
 * 
 */
export type Puzzle = $Result.DefaultSelection<Prisma.$PuzzlePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  player: 'player',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  prepare: 'prepare',
  running: 'running',
  ended: 'ended'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameRoom`: Exposes CRUD operations for the **GameRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameRooms
    * const gameRooms = await prisma.gameRoom.findMany()
    * ```
    */
  get gameRoom(): Prisma.GameRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.puzzle`: Exposes CRUD operations for the **Puzzle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Puzzles
    * const puzzles = await prisma.puzzle.findMany()
    * ```
    */
  get puzzle(): Prisma.PuzzleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    GameRoom: 'GameRoom',
    Puzzle: 'Puzzle'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "gameRoom" | "puzzle"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      GameRoom: {
        payload: Prisma.$GameRoomPayload<ExtArgs>
        fields: Prisma.GameRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoomPayload>
          }
          findFirst: {
            args: Prisma.GameRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoomPayload>
          }
          findMany: {
            args: Prisma.GameRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoomPayload>[]
          }
          create: {
            args: Prisma.GameRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoomPayload>
          }
          createMany: {
            args: Prisma.GameRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoomPayload>[]
          }
          delete: {
            args: Prisma.GameRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoomPayload>
          }
          update: {
            args: Prisma.GameRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoomPayload>
          }
          deleteMany: {
            args: Prisma.GameRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoomPayload>[]
          }
          upsert: {
            args: Prisma.GameRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoomPayload>
          }
          aggregate: {
            args: Prisma.GameRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameRoom>
          }
          groupBy: {
            args: Prisma.GameRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameRoomCountArgs<ExtArgs>
            result: $Utils.Optional<GameRoomCountAggregateOutputType> | number
          }
        }
      }
      Puzzle: {
        payload: Prisma.$PuzzlePayload<ExtArgs>
        fields: Prisma.PuzzleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PuzzleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuzzlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PuzzleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuzzlePayload>
          }
          findFirst: {
            args: Prisma.PuzzleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuzzlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PuzzleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuzzlePayload>
          }
          findMany: {
            args: Prisma.PuzzleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuzzlePayload>[]
          }
          create: {
            args: Prisma.PuzzleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuzzlePayload>
          }
          createMany: {
            args: Prisma.PuzzleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PuzzleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuzzlePayload>[]
          }
          delete: {
            args: Prisma.PuzzleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuzzlePayload>
          }
          update: {
            args: Prisma.PuzzleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuzzlePayload>
          }
          deleteMany: {
            args: Prisma.PuzzleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PuzzleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PuzzleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuzzlePayload>[]
          }
          upsert: {
            args: Prisma.PuzzleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuzzlePayload>
          }
          aggregate: {
            args: Prisma.PuzzleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePuzzle>
          }
          groupBy: {
            args: Prisma.PuzzleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PuzzleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PuzzleCountArgs<ExtArgs>
            result: $Utils.Optional<PuzzleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    gameRoom?: GameRoomOmit
    puzzle?: PuzzleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GameRoomCountOutputType
   */

  export type GameRoomCountOutputType = {
    puzzles: number
  }

  export type GameRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    puzzles?: boolean | GameRoomCountOutputTypeCountPuzzlesArgs
  }

  // Custom InputTypes
  /**
   * GameRoomCountOutputType without action
   */
  export type GameRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoomCountOutputType
     */
    select?: GameRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameRoomCountOutputType without action
   */
  export type GameRoomCountOutputTypeCountPuzzlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PuzzleWhereInput
  }


  /**
   * Count Type PuzzleCountOutputType
   */

  export type PuzzleCountOutputType = {
    gameRooms: number
  }

  export type PuzzleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameRooms?: boolean | PuzzleCountOutputTypeCountGameRoomsArgs
  }

  // Custom InputTypes
  /**
   * PuzzleCountOutputType without action
   */
  export type PuzzleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuzzleCountOutputType
     */
    select?: PuzzleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PuzzleCountOutputType without action
   */
  export type PuzzleCountOutputTypeCountGameRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRoomWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    score: number | null
  }

  export type UserSumAggregateOutputType = {
    score: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    role: $Enums.Role | null
    accessToken: string | null
    ready: boolean | null
    score: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: $Enums.Role | null
    accessToken: string | null
    ready: boolean | null
    score: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    role: number
    accessToken: number
    ready: number
    score: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    score?: true
  }

  export type UserSumAggregateInputType = {
    score?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    accessToken?: true
    ready?: true
    score?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    accessToken?: true
    ready?: true
    score?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    accessToken?: true
    ready?: true
    score?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    role: $Enums.Role
    accessToken: string
    ready: boolean
    score: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    accessToken?: boolean
    ready?: boolean
    score?: boolean
    playerOneGame?: boolean | User$playerOneGameArgs<ExtArgs>
    playerTwoGame?: boolean | User$playerTwoGameArgs<ExtArgs>
    currentPlayer?: boolean | User$currentPlayerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    accessToken?: boolean
    ready?: boolean
    score?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    accessToken?: boolean
    ready?: boolean
    score?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    accessToken?: boolean
    ready?: boolean
    score?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "accessToken" | "ready" | "score", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playerOneGame?: boolean | User$playerOneGameArgs<ExtArgs>
    playerTwoGame?: boolean | User$playerTwoGameArgs<ExtArgs>
    currentPlayer?: boolean | User$currentPlayerArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      playerOneGame: Prisma.$GameRoomPayload<ExtArgs> | null
      playerTwoGame: Prisma.$GameRoomPayload<ExtArgs> | null
      currentPlayer: Prisma.$GameRoomPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      role: $Enums.Role
      accessToken: string
      ready: boolean
      score: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playerOneGame<T extends User$playerOneGameArgs<ExtArgs> = {}>(args?: Subset<T, User$playerOneGameArgs<ExtArgs>>): Prisma__GameRoomClient<$Result.GetResult<Prisma.$GameRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    playerTwoGame<T extends User$playerTwoGameArgs<ExtArgs> = {}>(args?: Subset<T, User$playerTwoGameArgs<ExtArgs>>): Prisma__GameRoomClient<$Result.GetResult<Prisma.$GameRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    currentPlayer<T extends User$currentPlayerArgs<ExtArgs> = {}>(args?: Subset<T, User$currentPlayerArgs<ExtArgs>>): Prisma__GameRoomClient<$Result.GetResult<Prisma.$GameRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly accessToken: FieldRef<"User", 'String'>
    readonly ready: FieldRef<"User", 'Boolean'>
    readonly score: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.playerOneGame
   */
  export type User$playerOneGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomInclude<ExtArgs> | null
    where?: GameRoomWhereInput
  }

  /**
   * User.playerTwoGame
   */
  export type User$playerTwoGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomInclude<ExtArgs> | null
    where?: GameRoomWhereInput
  }

  /**
   * User.currentPlayer
   */
  export type User$currentPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomInclude<ExtArgs> | null
    where?: GameRoomWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model GameRoom
   */

  export type AggregateGameRoom = {
    _count: GameRoomCountAggregateOutputType | null
    _avg: GameRoomAvgAggregateOutputType | null
    _sum: GameRoomSumAggregateOutputType | null
    _min: GameRoomMinAggregateOutputType | null
    _max: GameRoomMaxAggregateOutputType | null
  }

  export type GameRoomAvgAggregateOutputType = {
    id: number | null
    inviteCode: number | null
    currentRound: number | null
    maxRound: number | null
  }

  export type GameRoomSumAggregateOutputType = {
    id: number | null
    inviteCode: number | null
    currentRound: number | null
    maxRound: number | null
  }

  export type GameRoomMinAggregateOutputType = {
    id: number | null
    inviteCode: number | null
    status: $Enums.Status | null
    player1Id: string | null
    player2Id: string | null
    currentRound: number | null
    currentPlayerId: string | null
    maxRound: number | null
  }

  export type GameRoomMaxAggregateOutputType = {
    id: number | null
    inviteCode: number | null
    status: $Enums.Status | null
    player1Id: string | null
    player2Id: string | null
    currentRound: number | null
    currentPlayerId: string | null
    maxRound: number | null
  }

  export type GameRoomCountAggregateOutputType = {
    id: number
    inviteCode: number
    status: number
    player1Id: number
    player2Id: number
    currentRound: number
    currentPlayerId: number
    maxRound: number
    _all: number
  }


  export type GameRoomAvgAggregateInputType = {
    id?: true
    inviteCode?: true
    currentRound?: true
    maxRound?: true
  }

  export type GameRoomSumAggregateInputType = {
    id?: true
    inviteCode?: true
    currentRound?: true
    maxRound?: true
  }

  export type GameRoomMinAggregateInputType = {
    id?: true
    inviteCode?: true
    status?: true
    player1Id?: true
    player2Id?: true
    currentRound?: true
    currentPlayerId?: true
    maxRound?: true
  }

  export type GameRoomMaxAggregateInputType = {
    id?: true
    inviteCode?: true
    status?: true
    player1Id?: true
    player2Id?: true
    currentRound?: true
    currentPlayerId?: true
    maxRound?: true
  }

  export type GameRoomCountAggregateInputType = {
    id?: true
    inviteCode?: true
    status?: true
    player1Id?: true
    player2Id?: true
    currentRound?: true
    currentPlayerId?: true
    maxRound?: true
    _all?: true
  }

  export type GameRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameRoom to aggregate.
     */
    where?: GameRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRooms to fetch.
     */
    orderBy?: GameRoomOrderByWithRelationInput | GameRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameRooms
    **/
    _count?: true | GameRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameRoomMaxAggregateInputType
  }

  export type GetGameRoomAggregateType<T extends GameRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateGameRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameRoom[P]>
      : GetScalarType<T[P], AggregateGameRoom[P]>
  }




  export type GameRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRoomWhereInput
    orderBy?: GameRoomOrderByWithAggregationInput | GameRoomOrderByWithAggregationInput[]
    by: GameRoomScalarFieldEnum[] | GameRoomScalarFieldEnum
    having?: GameRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameRoomCountAggregateInputType | true
    _avg?: GameRoomAvgAggregateInputType
    _sum?: GameRoomSumAggregateInputType
    _min?: GameRoomMinAggregateInputType
    _max?: GameRoomMaxAggregateInputType
  }

  export type GameRoomGroupByOutputType = {
    id: number
    inviteCode: number
    status: $Enums.Status
    player1Id: string
    player2Id: string | null
    currentRound: number
    currentPlayerId: string | null
    maxRound: number
    _count: GameRoomCountAggregateOutputType | null
    _avg: GameRoomAvgAggregateOutputType | null
    _sum: GameRoomSumAggregateOutputType | null
    _min: GameRoomMinAggregateOutputType | null
    _max: GameRoomMaxAggregateOutputType | null
  }

  type GetGameRoomGroupByPayload<T extends GameRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameRoomGroupByOutputType[P]>
            : GetScalarType<T[P], GameRoomGroupByOutputType[P]>
        }
      >
    >


  export type GameRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviteCode?: boolean
    status?: boolean
    player1Id?: boolean
    player2Id?: boolean
    currentRound?: boolean
    currentPlayerId?: boolean
    maxRound?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | GameRoom$player2Args<ExtArgs>
    currentPlayer?: boolean | GameRoom$currentPlayerArgs<ExtArgs>
    puzzles?: boolean | GameRoom$puzzlesArgs<ExtArgs>
    _count?: boolean | GameRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameRoom"]>

  export type GameRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviteCode?: boolean
    status?: boolean
    player1Id?: boolean
    player2Id?: boolean
    currentRound?: boolean
    currentPlayerId?: boolean
    maxRound?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | GameRoom$player2Args<ExtArgs>
    currentPlayer?: boolean | GameRoom$currentPlayerArgs<ExtArgs>
  }, ExtArgs["result"]["gameRoom"]>

  export type GameRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviteCode?: boolean
    status?: boolean
    player1Id?: boolean
    player2Id?: boolean
    currentRound?: boolean
    currentPlayerId?: boolean
    maxRound?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | GameRoom$player2Args<ExtArgs>
    currentPlayer?: boolean | GameRoom$currentPlayerArgs<ExtArgs>
  }, ExtArgs["result"]["gameRoom"]>

  export type GameRoomSelectScalar = {
    id?: boolean
    inviteCode?: boolean
    status?: boolean
    player1Id?: boolean
    player2Id?: boolean
    currentRound?: boolean
    currentPlayerId?: boolean
    maxRound?: boolean
  }

  export type GameRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inviteCode" | "status" | "player1Id" | "player2Id" | "currentRound" | "currentPlayerId" | "maxRound", ExtArgs["result"]["gameRoom"]>
  export type GameRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | GameRoom$player2Args<ExtArgs>
    currentPlayer?: boolean | GameRoom$currentPlayerArgs<ExtArgs>
    puzzles?: boolean | GameRoom$puzzlesArgs<ExtArgs>
    _count?: boolean | GameRoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | GameRoom$player2Args<ExtArgs>
    currentPlayer?: boolean | GameRoom$currentPlayerArgs<ExtArgs>
  }
  export type GameRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | GameRoom$player2Args<ExtArgs>
    currentPlayer?: boolean | GameRoom$currentPlayerArgs<ExtArgs>
  }

  export type $GameRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameRoom"
    objects: {
      player1: Prisma.$UserPayload<ExtArgs>
      player2: Prisma.$UserPayload<ExtArgs> | null
      currentPlayer: Prisma.$UserPayload<ExtArgs> | null
      puzzles: Prisma.$PuzzlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inviteCode: number
      status: $Enums.Status
      player1Id: string
      player2Id: string | null
      currentRound: number
      currentPlayerId: string | null
      maxRound: number
    }, ExtArgs["result"]["gameRoom"]>
    composites: {}
  }

  type GameRoomGetPayload<S extends boolean | null | undefined | GameRoomDefaultArgs> = $Result.GetResult<Prisma.$GameRoomPayload, S>

  type GameRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameRoomCountAggregateInputType | true
    }

  export interface GameRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameRoom'], meta: { name: 'GameRoom' } }
    /**
     * Find zero or one GameRoom that matches the filter.
     * @param {GameRoomFindUniqueArgs} args - Arguments to find a GameRoom
     * @example
     * // Get one GameRoom
     * const gameRoom = await prisma.gameRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameRoomFindUniqueArgs>(args: SelectSubset<T, GameRoomFindUniqueArgs<ExtArgs>>): Prisma__GameRoomClient<$Result.GetResult<Prisma.$GameRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameRoomFindUniqueOrThrowArgs} args - Arguments to find a GameRoom
     * @example
     * // Get one GameRoom
     * const gameRoom = await prisma.gameRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, GameRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameRoomClient<$Result.GetResult<Prisma.$GameRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRoomFindFirstArgs} args - Arguments to find a GameRoom
     * @example
     * // Get one GameRoom
     * const gameRoom = await prisma.gameRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameRoomFindFirstArgs>(args?: SelectSubset<T, GameRoomFindFirstArgs<ExtArgs>>): Prisma__GameRoomClient<$Result.GetResult<Prisma.$GameRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRoomFindFirstOrThrowArgs} args - Arguments to find a GameRoom
     * @example
     * // Get one GameRoom
     * const gameRoom = await prisma.gameRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, GameRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameRoomClient<$Result.GetResult<Prisma.$GameRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameRooms
     * const gameRooms = await prisma.gameRoom.findMany()
     * 
     * // Get first 10 GameRooms
     * const gameRooms = await prisma.gameRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameRoomWithIdOnly = await prisma.gameRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameRoomFindManyArgs>(args?: SelectSubset<T, GameRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameRoom.
     * @param {GameRoomCreateArgs} args - Arguments to create a GameRoom.
     * @example
     * // Create one GameRoom
     * const GameRoom = await prisma.gameRoom.create({
     *   data: {
     *     // ... data to create a GameRoom
     *   }
     * })
     * 
     */
    create<T extends GameRoomCreateArgs>(args: SelectSubset<T, GameRoomCreateArgs<ExtArgs>>): Prisma__GameRoomClient<$Result.GetResult<Prisma.$GameRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameRooms.
     * @param {GameRoomCreateManyArgs} args - Arguments to create many GameRooms.
     * @example
     * // Create many GameRooms
     * const gameRoom = await prisma.gameRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameRoomCreateManyArgs>(args?: SelectSubset<T, GameRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameRooms and returns the data saved in the database.
     * @param {GameRoomCreateManyAndReturnArgs} args - Arguments to create many GameRooms.
     * @example
     * // Create many GameRooms
     * const gameRoom = await prisma.gameRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameRooms and only return the `id`
     * const gameRoomWithIdOnly = await prisma.gameRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, GameRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameRoom.
     * @param {GameRoomDeleteArgs} args - Arguments to delete one GameRoom.
     * @example
     * // Delete one GameRoom
     * const GameRoom = await prisma.gameRoom.delete({
     *   where: {
     *     // ... filter to delete one GameRoom
     *   }
     * })
     * 
     */
    delete<T extends GameRoomDeleteArgs>(args: SelectSubset<T, GameRoomDeleteArgs<ExtArgs>>): Prisma__GameRoomClient<$Result.GetResult<Prisma.$GameRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameRoom.
     * @param {GameRoomUpdateArgs} args - Arguments to update one GameRoom.
     * @example
     * // Update one GameRoom
     * const gameRoom = await prisma.gameRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameRoomUpdateArgs>(args: SelectSubset<T, GameRoomUpdateArgs<ExtArgs>>): Prisma__GameRoomClient<$Result.GetResult<Prisma.$GameRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameRooms.
     * @param {GameRoomDeleteManyArgs} args - Arguments to filter GameRooms to delete.
     * @example
     * // Delete a few GameRooms
     * const { count } = await prisma.gameRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameRoomDeleteManyArgs>(args?: SelectSubset<T, GameRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameRooms
     * const gameRoom = await prisma.gameRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameRoomUpdateManyArgs>(args: SelectSubset<T, GameRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameRooms and returns the data updated in the database.
     * @param {GameRoomUpdateManyAndReturnArgs} args - Arguments to update many GameRooms.
     * @example
     * // Update many GameRooms
     * const gameRoom = await prisma.gameRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameRooms and only return the `id`
     * const gameRoomWithIdOnly = await prisma.gameRoom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, GameRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameRoom.
     * @param {GameRoomUpsertArgs} args - Arguments to update or create a GameRoom.
     * @example
     * // Update or create a GameRoom
     * const gameRoom = await prisma.gameRoom.upsert({
     *   create: {
     *     // ... data to create a GameRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameRoom we want to update
     *   }
     * })
     */
    upsert<T extends GameRoomUpsertArgs>(args: SelectSubset<T, GameRoomUpsertArgs<ExtArgs>>): Prisma__GameRoomClient<$Result.GetResult<Prisma.$GameRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRoomCountArgs} args - Arguments to filter GameRooms to count.
     * @example
     * // Count the number of GameRooms
     * const count = await prisma.gameRoom.count({
     *   where: {
     *     // ... the filter for the GameRooms we want to count
     *   }
     * })
    **/
    count<T extends GameRoomCountArgs>(
      args?: Subset<T, GameRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameRoomAggregateArgs>(args: Subset<T, GameRoomAggregateArgs>): Prisma.PrismaPromise<GetGameRoomAggregateType<T>>

    /**
     * Group by GameRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameRoomGroupByArgs['orderBy'] }
        : { orderBy?: GameRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameRoom model
   */
  readonly fields: GameRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player2<T extends GameRoom$player2Args<ExtArgs> = {}>(args?: Subset<T, GameRoom$player2Args<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    currentPlayer<T extends GameRoom$currentPlayerArgs<ExtArgs> = {}>(args?: Subset<T, GameRoom$currentPlayerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    puzzles<T extends GameRoom$puzzlesArgs<ExtArgs> = {}>(args?: Subset<T, GameRoom$puzzlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuzzlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameRoom model
   */
  interface GameRoomFieldRefs {
    readonly id: FieldRef<"GameRoom", 'Int'>
    readonly inviteCode: FieldRef<"GameRoom", 'Int'>
    readonly status: FieldRef<"GameRoom", 'Status'>
    readonly player1Id: FieldRef<"GameRoom", 'String'>
    readonly player2Id: FieldRef<"GameRoom", 'String'>
    readonly currentRound: FieldRef<"GameRoom", 'Int'>
    readonly currentPlayerId: FieldRef<"GameRoom", 'String'>
    readonly maxRound: FieldRef<"GameRoom", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GameRoom findUnique
   */
  export type GameRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomInclude<ExtArgs> | null
    /**
     * Filter, which GameRoom to fetch.
     */
    where: GameRoomWhereUniqueInput
  }

  /**
   * GameRoom findUniqueOrThrow
   */
  export type GameRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomInclude<ExtArgs> | null
    /**
     * Filter, which GameRoom to fetch.
     */
    where: GameRoomWhereUniqueInput
  }

  /**
   * GameRoom findFirst
   */
  export type GameRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomInclude<ExtArgs> | null
    /**
     * Filter, which GameRoom to fetch.
     */
    where?: GameRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRooms to fetch.
     */
    orderBy?: GameRoomOrderByWithRelationInput | GameRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameRooms.
     */
    cursor?: GameRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameRooms.
     */
    distinct?: GameRoomScalarFieldEnum | GameRoomScalarFieldEnum[]
  }

  /**
   * GameRoom findFirstOrThrow
   */
  export type GameRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomInclude<ExtArgs> | null
    /**
     * Filter, which GameRoom to fetch.
     */
    where?: GameRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRooms to fetch.
     */
    orderBy?: GameRoomOrderByWithRelationInput | GameRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameRooms.
     */
    cursor?: GameRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameRooms.
     */
    distinct?: GameRoomScalarFieldEnum | GameRoomScalarFieldEnum[]
  }

  /**
   * GameRoom findMany
   */
  export type GameRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomInclude<ExtArgs> | null
    /**
     * Filter, which GameRooms to fetch.
     */
    where?: GameRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRooms to fetch.
     */
    orderBy?: GameRoomOrderByWithRelationInput | GameRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameRooms.
     */
    cursor?: GameRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRooms.
     */
    skip?: number
    distinct?: GameRoomScalarFieldEnum | GameRoomScalarFieldEnum[]
  }

  /**
   * GameRoom create
   */
  export type GameRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a GameRoom.
     */
    data: XOR<GameRoomCreateInput, GameRoomUncheckedCreateInput>
  }

  /**
   * GameRoom createMany
   */
  export type GameRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameRooms.
     */
    data: GameRoomCreateManyInput | GameRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameRoom createManyAndReturn
   */
  export type GameRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * The data used to create many GameRooms.
     */
    data: GameRoomCreateManyInput | GameRoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameRoom update
   */
  export type GameRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a GameRoom.
     */
    data: XOR<GameRoomUpdateInput, GameRoomUncheckedUpdateInput>
    /**
     * Choose, which GameRoom to update.
     */
    where: GameRoomWhereUniqueInput
  }

  /**
   * GameRoom updateMany
   */
  export type GameRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameRooms.
     */
    data: XOR<GameRoomUpdateManyMutationInput, GameRoomUncheckedUpdateManyInput>
    /**
     * Filter which GameRooms to update
     */
    where?: GameRoomWhereInput
    /**
     * Limit how many GameRooms to update.
     */
    limit?: number
  }

  /**
   * GameRoom updateManyAndReturn
   */
  export type GameRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * The data used to update GameRooms.
     */
    data: XOR<GameRoomUpdateManyMutationInput, GameRoomUncheckedUpdateManyInput>
    /**
     * Filter which GameRooms to update
     */
    where?: GameRoomWhereInput
    /**
     * Limit how many GameRooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameRoom upsert
   */
  export type GameRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the GameRoom to update in case it exists.
     */
    where: GameRoomWhereUniqueInput
    /**
     * In case the GameRoom found by the `where` argument doesn't exist, create a new GameRoom with this data.
     */
    create: XOR<GameRoomCreateInput, GameRoomUncheckedCreateInput>
    /**
     * In case the GameRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameRoomUpdateInput, GameRoomUncheckedUpdateInput>
  }

  /**
   * GameRoom delete
   */
  export type GameRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomInclude<ExtArgs> | null
    /**
     * Filter which GameRoom to delete.
     */
    where: GameRoomWhereUniqueInput
  }

  /**
   * GameRoom deleteMany
   */
  export type GameRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameRooms to delete
     */
    where?: GameRoomWhereInput
    /**
     * Limit how many GameRooms to delete.
     */
    limit?: number
  }

  /**
   * GameRoom.player2
   */
  export type GameRoom$player2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * GameRoom.currentPlayer
   */
  export type GameRoom$currentPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * GameRoom.puzzles
   */
  export type GameRoom$puzzlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puzzle
     */
    select?: PuzzleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Puzzle
     */
    omit?: PuzzleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuzzleInclude<ExtArgs> | null
    where?: PuzzleWhereInput
    orderBy?: PuzzleOrderByWithRelationInput | PuzzleOrderByWithRelationInput[]
    cursor?: PuzzleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PuzzleScalarFieldEnum | PuzzleScalarFieldEnum[]
  }

  /**
   * GameRoom without action
   */
  export type GameRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomInclude<ExtArgs> | null
  }


  /**
   * Model Puzzle
   */

  export type AggregatePuzzle = {
    _count: PuzzleCountAggregateOutputType | null
    _avg: PuzzleAvgAggregateOutputType | null
    _sum: PuzzleSumAggregateOutputType | null
    _min: PuzzleMinAggregateOutputType | null
    _max: PuzzleMaxAggregateOutputType | null
  }

  export type PuzzleAvgAggregateOutputType = {
    id: number | null
    size: number | null
    targetPositionX: number | null
    targetPositionY: number | null
    targetRadius: number | null
  }

  export type PuzzleSumAggregateOutputType = {
    id: number | null
    size: number | null
    targetPositionX: number | null
    targetPositionY: number | null
    targetRadius: number | null
  }

  export type PuzzleMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    taskText: string | null
    size: number | null
    targetPositionX: number | null
    targetPositionY: number | null
    targetRadius: number | null
  }

  export type PuzzleMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    taskText: string | null
    size: number | null
    targetPositionX: number | null
    targetPositionY: number | null
    targetRadius: number | null
  }

  export type PuzzleCountAggregateOutputType = {
    id: number
    imageUrl: number
    taskText: number
    size: number
    targetPositionX: number
    targetPositionY: number
    targetRadius: number
    _all: number
  }


  export type PuzzleAvgAggregateInputType = {
    id?: true
    size?: true
    targetPositionX?: true
    targetPositionY?: true
    targetRadius?: true
  }

  export type PuzzleSumAggregateInputType = {
    id?: true
    size?: true
    targetPositionX?: true
    targetPositionY?: true
    targetRadius?: true
  }

  export type PuzzleMinAggregateInputType = {
    id?: true
    imageUrl?: true
    taskText?: true
    size?: true
    targetPositionX?: true
    targetPositionY?: true
    targetRadius?: true
  }

  export type PuzzleMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    taskText?: true
    size?: true
    targetPositionX?: true
    targetPositionY?: true
    targetRadius?: true
  }

  export type PuzzleCountAggregateInputType = {
    id?: true
    imageUrl?: true
    taskText?: true
    size?: true
    targetPositionX?: true
    targetPositionY?: true
    targetRadius?: true
    _all?: true
  }

  export type PuzzleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Puzzle to aggregate.
     */
    where?: PuzzleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Puzzles to fetch.
     */
    orderBy?: PuzzleOrderByWithRelationInput | PuzzleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PuzzleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Puzzles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Puzzles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Puzzles
    **/
    _count?: true | PuzzleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PuzzleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PuzzleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PuzzleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PuzzleMaxAggregateInputType
  }

  export type GetPuzzleAggregateType<T extends PuzzleAggregateArgs> = {
        [P in keyof T & keyof AggregatePuzzle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePuzzle[P]>
      : GetScalarType<T[P], AggregatePuzzle[P]>
  }




  export type PuzzleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PuzzleWhereInput
    orderBy?: PuzzleOrderByWithAggregationInput | PuzzleOrderByWithAggregationInput[]
    by: PuzzleScalarFieldEnum[] | PuzzleScalarFieldEnum
    having?: PuzzleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PuzzleCountAggregateInputType | true
    _avg?: PuzzleAvgAggregateInputType
    _sum?: PuzzleSumAggregateInputType
    _min?: PuzzleMinAggregateInputType
    _max?: PuzzleMaxAggregateInputType
  }

  export type PuzzleGroupByOutputType = {
    id: number
    imageUrl: string
    taskText: string
    size: number
    targetPositionX: number
    targetPositionY: number
    targetRadius: number
    _count: PuzzleCountAggregateOutputType | null
    _avg: PuzzleAvgAggregateOutputType | null
    _sum: PuzzleSumAggregateOutputType | null
    _min: PuzzleMinAggregateOutputType | null
    _max: PuzzleMaxAggregateOutputType | null
  }

  type GetPuzzleGroupByPayload<T extends PuzzleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PuzzleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PuzzleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PuzzleGroupByOutputType[P]>
            : GetScalarType<T[P], PuzzleGroupByOutputType[P]>
        }
      >
    >


  export type PuzzleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    taskText?: boolean
    size?: boolean
    targetPositionX?: boolean
    targetPositionY?: boolean
    targetRadius?: boolean
    gameRooms?: boolean | Puzzle$gameRoomsArgs<ExtArgs>
    _count?: boolean | PuzzleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["puzzle"]>

  export type PuzzleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    taskText?: boolean
    size?: boolean
    targetPositionX?: boolean
    targetPositionY?: boolean
    targetRadius?: boolean
  }, ExtArgs["result"]["puzzle"]>

  export type PuzzleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    taskText?: boolean
    size?: boolean
    targetPositionX?: boolean
    targetPositionY?: boolean
    targetRadius?: boolean
  }, ExtArgs["result"]["puzzle"]>

  export type PuzzleSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    taskText?: boolean
    size?: boolean
    targetPositionX?: boolean
    targetPositionY?: boolean
    targetRadius?: boolean
  }

  export type PuzzleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "taskText" | "size" | "targetPositionX" | "targetPositionY" | "targetRadius", ExtArgs["result"]["puzzle"]>
  export type PuzzleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameRooms?: boolean | Puzzle$gameRoomsArgs<ExtArgs>
    _count?: boolean | PuzzleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PuzzleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PuzzleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PuzzlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Puzzle"
    objects: {
      gameRooms: Prisma.$GameRoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string
      taskText: string
      size: number
      targetPositionX: number
      targetPositionY: number
      targetRadius: number
    }, ExtArgs["result"]["puzzle"]>
    composites: {}
  }

  type PuzzleGetPayload<S extends boolean | null | undefined | PuzzleDefaultArgs> = $Result.GetResult<Prisma.$PuzzlePayload, S>

  type PuzzleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PuzzleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PuzzleCountAggregateInputType | true
    }

  export interface PuzzleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Puzzle'], meta: { name: 'Puzzle' } }
    /**
     * Find zero or one Puzzle that matches the filter.
     * @param {PuzzleFindUniqueArgs} args - Arguments to find a Puzzle
     * @example
     * // Get one Puzzle
     * const puzzle = await prisma.puzzle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PuzzleFindUniqueArgs>(args: SelectSubset<T, PuzzleFindUniqueArgs<ExtArgs>>): Prisma__PuzzleClient<$Result.GetResult<Prisma.$PuzzlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Puzzle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PuzzleFindUniqueOrThrowArgs} args - Arguments to find a Puzzle
     * @example
     * // Get one Puzzle
     * const puzzle = await prisma.puzzle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PuzzleFindUniqueOrThrowArgs>(args: SelectSubset<T, PuzzleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PuzzleClient<$Result.GetResult<Prisma.$PuzzlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Puzzle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuzzleFindFirstArgs} args - Arguments to find a Puzzle
     * @example
     * // Get one Puzzle
     * const puzzle = await prisma.puzzle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PuzzleFindFirstArgs>(args?: SelectSubset<T, PuzzleFindFirstArgs<ExtArgs>>): Prisma__PuzzleClient<$Result.GetResult<Prisma.$PuzzlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Puzzle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuzzleFindFirstOrThrowArgs} args - Arguments to find a Puzzle
     * @example
     * // Get one Puzzle
     * const puzzle = await prisma.puzzle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PuzzleFindFirstOrThrowArgs>(args?: SelectSubset<T, PuzzleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PuzzleClient<$Result.GetResult<Prisma.$PuzzlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Puzzles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuzzleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Puzzles
     * const puzzles = await prisma.puzzle.findMany()
     * 
     * // Get first 10 Puzzles
     * const puzzles = await prisma.puzzle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const puzzleWithIdOnly = await prisma.puzzle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PuzzleFindManyArgs>(args?: SelectSubset<T, PuzzleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuzzlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Puzzle.
     * @param {PuzzleCreateArgs} args - Arguments to create a Puzzle.
     * @example
     * // Create one Puzzle
     * const Puzzle = await prisma.puzzle.create({
     *   data: {
     *     // ... data to create a Puzzle
     *   }
     * })
     * 
     */
    create<T extends PuzzleCreateArgs>(args: SelectSubset<T, PuzzleCreateArgs<ExtArgs>>): Prisma__PuzzleClient<$Result.GetResult<Prisma.$PuzzlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Puzzles.
     * @param {PuzzleCreateManyArgs} args - Arguments to create many Puzzles.
     * @example
     * // Create many Puzzles
     * const puzzle = await prisma.puzzle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PuzzleCreateManyArgs>(args?: SelectSubset<T, PuzzleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Puzzles and returns the data saved in the database.
     * @param {PuzzleCreateManyAndReturnArgs} args - Arguments to create many Puzzles.
     * @example
     * // Create many Puzzles
     * const puzzle = await prisma.puzzle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Puzzles and only return the `id`
     * const puzzleWithIdOnly = await prisma.puzzle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PuzzleCreateManyAndReturnArgs>(args?: SelectSubset<T, PuzzleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuzzlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Puzzle.
     * @param {PuzzleDeleteArgs} args - Arguments to delete one Puzzle.
     * @example
     * // Delete one Puzzle
     * const Puzzle = await prisma.puzzle.delete({
     *   where: {
     *     // ... filter to delete one Puzzle
     *   }
     * })
     * 
     */
    delete<T extends PuzzleDeleteArgs>(args: SelectSubset<T, PuzzleDeleteArgs<ExtArgs>>): Prisma__PuzzleClient<$Result.GetResult<Prisma.$PuzzlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Puzzle.
     * @param {PuzzleUpdateArgs} args - Arguments to update one Puzzle.
     * @example
     * // Update one Puzzle
     * const puzzle = await prisma.puzzle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PuzzleUpdateArgs>(args: SelectSubset<T, PuzzleUpdateArgs<ExtArgs>>): Prisma__PuzzleClient<$Result.GetResult<Prisma.$PuzzlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Puzzles.
     * @param {PuzzleDeleteManyArgs} args - Arguments to filter Puzzles to delete.
     * @example
     * // Delete a few Puzzles
     * const { count } = await prisma.puzzle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PuzzleDeleteManyArgs>(args?: SelectSubset<T, PuzzleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Puzzles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuzzleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Puzzles
     * const puzzle = await prisma.puzzle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PuzzleUpdateManyArgs>(args: SelectSubset<T, PuzzleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Puzzles and returns the data updated in the database.
     * @param {PuzzleUpdateManyAndReturnArgs} args - Arguments to update many Puzzles.
     * @example
     * // Update many Puzzles
     * const puzzle = await prisma.puzzle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Puzzles and only return the `id`
     * const puzzleWithIdOnly = await prisma.puzzle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PuzzleUpdateManyAndReturnArgs>(args: SelectSubset<T, PuzzleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuzzlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Puzzle.
     * @param {PuzzleUpsertArgs} args - Arguments to update or create a Puzzle.
     * @example
     * // Update or create a Puzzle
     * const puzzle = await prisma.puzzle.upsert({
     *   create: {
     *     // ... data to create a Puzzle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Puzzle we want to update
     *   }
     * })
     */
    upsert<T extends PuzzleUpsertArgs>(args: SelectSubset<T, PuzzleUpsertArgs<ExtArgs>>): Prisma__PuzzleClient<$Result.GetResult<Prisma.$PuzzlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Puzzles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuzzleCountArgs} args - Arguments to filter Puzzles to count.
     * @example
     * // Count the number of Puzzles
     * const count = await prisma.puzzle.count({
     *   where: {
     *     // ... the filter for the Puzzles we want to count
     *   }
     * })
    **/
    count<T extends PuzzleCountArgs>(
      args?: Subset<T, PuzzleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PuzzleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Puzzle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuzzleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PuzzleAggregateArgs>(args: Subset<T, PuzzleAggregateArgs>): Prisma.PrismaPromise<GetPuzzleAggregateType<T>>

    /**
     * Group by Puzzle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuzzleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PuzzleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PuzzleGroupByArgs['orderBy'] }
        : { orderBy?: PuzzleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PuzzleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPuzzleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Puzzle model
   */
  readonly fields: PuzzleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Puzzle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PuzzleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gameRooms<T extends Puzzle$gameRoomsArgs<ExtArgs> = {}>(args?: Subset<T, Puzzle$gameRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Puzzle model
   */
  interface PuzzleFieldRefs {
    readonly id: FieldRef<"Puzzle", 'Int'>
    readonly imageUrl: FieldRef<"Puzzle", 'String'>
    readonly taskText: FieldRef<"Puzzle", 'String'>
    readonly size: FieldRef<"Puzzle", 'Int'>
    readonly targetPositionX: FieldRef<"Puzzle", 'Float'>
    readonly targetPositionY: FieldRef<"Puzzle", 'Float'>
    readonly targetRadius: FieldRef<"Puzzle", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Puzzle findUnique
   */
  export type PuzzleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puzzle
     */
    select?: PuzzleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Puzzle
     */
    omit?: PuzzleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuzzleInclude<ExtArgs> | null
    /**
     * Filter, which Puzzle to fetch.
     */
    where: PuzzleWhereUniqueInput
  }

  /**
   * Puzzle findUniqueOrThrow
   */
  export type PuzzleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puzzle
     */
    select?: PuzzleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Puzzle
     */
    omit?: PuzzleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuzzleInclude<ExtArgs> | null
    /**
     * Filter, which Puzzle to fetch.
     */
    where: PuzzleWhereUniqueInput
  }

  /**
   * Puzzle findFirst
   */
  export type PuzzleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puzzle
     */
    select?: PuzzleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Puzzle
     */
    omit?: PuzzleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuzzleInclude<ExtArgs> | null
    /**
     * Filter, which Puzzle to fetch.
     */
    where?: PuzzleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Puzzles to fetch.
     */
    orderBy?: PuzzleOrderByWithRelationInput | PuzzleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Puzzles.
     */
    cursor?: PuzzleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Puzzles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Puzzles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Puzzles.
     */
    distinct?: PuzzleScalarFieldEnum | PuzzleScalarFieldEnum[]
  }

  /**
   * Puzzle findFirstOrThrow
   */
  export type PuzzleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puzzle
     */
    select?: PuzzleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Puzzle
     */
    omit?: PuzzleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuzzleInclude<ExtArgs> | null
    /**
     * Filter, which Puzzle to fetch.
     */
    where?: PuzzleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Puzzles to fetch.
     */
    orderBy?: PuzzleOrderByWithRelationInput | PuzzleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Puzzles.
     */
    cursor?: PuzzleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Puzzles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Puzzles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Puzzles.
     */
    distinct?: PuzzleScalarFieldEnum | PuzzleScalarFieldEnum[]
  }

  /**
   * Puzzle findMany
   */
  export type PuzzleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puzzle
     */
    select?: PuzzleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Puzzle
     */
    omit?: PuzzleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuzzleInclude<ExtArgs> | null
    /**
     * Filter, which Puzzles to fetch.
     */
    where?: PuzzleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Puzzles to fetch.
     */
    orderBy?: PuzzleOrderByWithRelationInput | PuzzleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Puzzles.
     */
    cursor?: PuzzleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Puzzles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Puzzles.
     */
    skip?: number
    distinct?: PuzzleScalarFieldEnum | PuzzleScalarFieldEnum[]
  }

  /**
   * Puzzle create
   */
  export type PuzzleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puzzle
     */
    select?: PuzzleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Puzzle
     */
    omit?: PuzzleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuzzleInclude<ExtArgs> | null
    /**
     * The data needed to create a Puzzle.
     */
    data: XOR<PuzzleCreateInput, PuzzleUncheckedCreateInput>
  }

  /**
   * Puzzle createMany
   */
  export type PuzzleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Puzzles.
     */
    data: PuzzleCreateManyInput | PuzzleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Puzzle createManyAndReturn
   */
  export type PuzzleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puzzle
     */
    select?: PuzzleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Puzzle
     */
    omit?: PuzzleOmit<ExtArgs> | null
    /**
     * The data used to create many Puzzles.
     */
    data: PuzzleCreateManyInput | PuzzleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Puzzle update
   */
  export type PuzzleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puzzle
     */
    select?: PuzzleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Puzzle
     */
    omit?: PuzzleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuzzleInclude<ExtArgs> | null
    /**
     * The data needed to update a Puzzle.
     */
    data: XOR<PuzzleUpdateInput, PuzzleUncheckedUpdateInput>
    /**
     * Choose, which Puzzle to update.
     */
    where: PuzzleWhereUniqueInput
  }

  /**
   * Puzzle updateMany
   */
  export type PuzzleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Puzzles.
     */
    data: XOR<PuzzleUpdateManyMutationInput, PuzzleUncheckedUpdateManyInput>
    /**
     * Filter which Puzzles to update
     */
    where?: PuzzleWhereInput
    /**
     * Limit how many Puzzles to update.
     */
    limit?: number
  }

  /**
   * Puzzle updateManyAndReturn
   */
  export type PuzzleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puzzle
     */
    select?: PuzzleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Puzzle
     */
    omit?: PuzzleOmit<ExtArgs> | null
    /**
     * The data used to update Puzzles.
     */
    data: XOR<PuzzleUpdateManyMutationInput, PuzzleUncheckedUpdateManyInput>
    /**
     * Filter which Puzzles to update
     */
    where?: PuzzleWhereInput
    /**
     * Limit how many Puzzles to update.
     */
    limit?: number
  }

  /**
   * Puzzle upsert
   */
  export type PuzzleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puzzle
     */
    select?: PuzzleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Puzzle
     */
    omit?: PuzzleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuzzleInclude<ExtArgs> | null
    /**
     * The filter to search for the Puzzle to update in case it exists.
     */
    where: PuzzleWhereUniqueInput
    /**
     * In case the Puzzle found by the `where` argument doesn't exist, create a new Puzzle with this data.
     */
    create: XOR<PuzzleCreateInput, PuzzleUncheckedCreateInput>
    /**
     * In case the Puzzle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PuzzleUpdateInput, PuzzleUncheckedUpdateInput>
  }

  /**
   * Puzzle delete
   */
  export type PuzzleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puzzle
     */
    select?: PuzzleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Puzzle
     */
    omit?: PuzzleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuzzleInclude<ExtArgs> | null
    /**
     * Filter which Puzzle to delete.
     */
    where: PuzzleWhereUniqueInput
  }

  /**
   * Puzzle deleteMany
   */
  export type PuzzleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Puzzles to delete
     */
    where?: PuzzleWhereInput
    /**
     * Limit how many Puzzles to delete.
     */
    limit?: number
  }

  /**
   * Puzzle.gameRooms
   */
  export type Puzzle$gameRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRoom
     */
    select?: GameRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRoom
     */
    omit?: GameRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoomInclude<ExtArgs> | null
    where?: GameRoomWhereInput
    orderBy?: GameRoomOrderByWithRelationInput | GameRoomOrderByWithRelationInput[]
    cursor?: GameRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameRoomScalarFieldEnum | GameRoomScalarFieldEnum[]
  }

  /**
   * Puzzle without action
   */
  export type PuzzleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puzzle
     */
    select?: PuzzleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Puzzle
     */
    omit?: PuzzleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuzzleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    accessToken: 'accessToken',
    ready: 'ready',
    score: 'score'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GameRoomScalarFieldEnum: {
    id: 'id',
    inviteCode: 'inviteCode',
    status: 'status',
    player1Id: 'player1Id',
    player2Id: 'player2Id',
    currentRound: 'currentRound',
    currentPlayerId: 'currentPlayerId',
    maxRound: 'maxRound'
  };

  export type GameRoomScalarFieldEnum = (typeof GameRoomScalarFieldEnum)[keyof typeof GameRoomScalarFieldEnum]


  export const PuzzleScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    taskText: 'taskText',
    size: 'size',
    targetPositionX: 'targetPositionX',
    targetPositionY: 'targetPositionY',
    targetRadius: 'targetRadius'
  };

  export type PuzzleScalarFieldEnum = (typeof PuzzleScalarFieldEnum)[keyof typeof PuzzleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    accessToken?: StringFilter<"User"> | string
    ready?: BoolFilter<"User"> | boolean
    score?: IntFilter<"User"> | number
    playerOneGame?: XOR<GameRoomNullableScalarRelationFilter, GameRoomWhereInput> | null
    playerTwoGame?: XOR<GameRoomNullableScalarRelationFilter, GameRoomWhereInput> | null
    currentPlayer?: XOR<GameRoomNullableScalarRelationFilter, GameRoomWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    accessToken?: SortOrder
    ready?: SortOrder
    score?: SortOrder
    playerOneGame?: GameRoomOrderByWithRelationInput
    playerTwoGame?: GameRoomOrderByWithRelationInput
    currentPlayer?: GameRoomOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    accessToken?: StringFilter<"User"> | string
    ready?: BoolFilter<"User"> | boolean
    score?: IntFilter<"User"> | number
    playerOneGame?: XOR<GameRoomNullableScalarRelationFilter, GameRoomWhereInput> | null
    playerTwoGame?: XOR<GameRoomNullableScalarRelationFilter, GameRoomWhereInput> | null
    currentPlayer?: XOR<GameRoomNullableScalarRelationFilter, GameRoomWhereInput> | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    accessToken?: SortOrder
    ready?: SortOrder
    score?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    accessToken?: StringWithAggregatesFilter<"User"> | string
    ready?: BoolWithAggregatesFilter<"User"> | boolean
    score?: IntWithAggregatesFilter<"User"> | number
  }

  export type GameRoomWhereInput = {
    AND?: GameRoomWhereInput | GameRoomWhereInput[]
    OR?: GameRoomWhereInput[]
    NOT?: GameRoomWhereInput | GameRoomWhereInput[]
    id?: IntFilter<"GameRoom"> | number
    inviteCode?: IntFilter<"GameRoom"> | number
    status?: EnumStatusFilter<"GameRoom"> | $Enums.Status
    player1Id?: UuidFilter<"GameRoom"> | string
    player2Id?: UuidNullableFilter<"GameRoom"> | string | null
    currentRound?: IntFilter<"GameRoom"> | number
    currentPlayerId?: UuidNullableFilter<"GameRoom"> | string | null
    maxRound?: IntFilter<"GameRoom"> | number
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    currentPlayer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    puzzles?: PuzzleListRelationFilter
  }

  export type GameRoomOrderByWithRelationInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrderInput | SortOrder
    currentRound?: SortOrder
    currentPlayerId?: SortOrderInput | SortOrder
    maxRound?: SortOrder
    player1?: UserOrderByWithRelationInput
    player2?: UserOrderByWithRelationInput
    currentPlayer?: UserOrderByWithRelationInput
    puzzles?: PuzzleOrderByRelationAggregateInput
  }

  export type GameRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    player1Id?: string
    player2Id?: string
    currentPlayerId?: string
    AND?: GameRoomWhereInput | GameRoomWhereInput[]
    OR?: GameRoomWhereInput[]
    NOT?: GameRoomWhereInput | GameRoomWhereInput[]
    inviteCode?: IntFilter<"GameRoom"> | number
    status?: EnumStatusFilter<"GameRoom"> | $Enums.Status
    currentRound?: IntFilter<"GameRoom"> | number
    maxRound?: IntFilter<"GameRoom"> | number
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    currentPlayer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    puzzles?: PuzzleListRelationFilter
  }, "id" | "player1Id" | "player2Id" | "currentPlayerId">

  export type GameRoomOrderByWithAggregationInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrderInput | SortOrder
    currentRound?: SortOrder
    currentPlayerId?: SortOrderInput | SortOrder
    maxRound?: SortOrder
    _count?: GameRoomCountOrderByAggregateInput
    _avg?: GameRoomAvgOrderByAggregateInput
    _max?: GameRoomMaxOrderByAggregateInput
    _min?: GameRoomMinOrderByAggregateInput
    _sum?: GameRoomSumOrderByAggregateInput
  }

  export type GameRoomScalarWhereWithAggregatesInput = {
    AND?: GameRoomScalarWhereWithAggregatesInput | GameRoomScalarWhereWithAggregatesInput[]
    OR?: GameRoomScalarWhereWithAggregatesInput[]
    NOT?: GameRoomScalarWhereWithAggregatesInput | GameRoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameRoom"> | number
    inviteCode?: IntWithAggregatesFilter<"GameRoom"> | number
    status?: EnumStatusWithAggregatesFilter<"GameRoom"> | $Enums.Status
    player1Id?: UuidWithAggregatesFilter<"GameRoom"> | string
    player2Id?: UuidNullableWithAggregatesFilter<"GameRoom"> | string | null
    currentRound?: IntWithAggregatesFilter<"GameRoom"> | number
    currentPlayerId?: UuidNullableWithAggregatesFilter<"GameRoom"> | string | null
    maxRound?: IntWithAggregatesFilter<"GameRoom"> | number
  }

  export type PuzzleWhereInput = {
    AND?: PuzzleWhereInput | PuzzleWhereInput[]
    OR?: PuzzleWhereInput[]
    NOT?: PuzzleWhereInput | PuzzleWhereInput[]
    id?: IntFilter<"Puzzle"> | number
    imageUrl?: StringFilter<"Puzzle"> | string
    taskText?: StringFilter<"Puzzle"> | string
    size?: IntFilter<"Puzzle"> | number
    targetPositionX?: FloatFilter<"Puzzle"> | number
    targetPositionY?: FloatFilter<"Puzzle"> | number
    targetRadius?: FloatFilter<"Puzzle"> | number
    gameRooms?: GameRoomListRelationFilter
  }

  export type PuzzleOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    taskText?: SortOrder
    size?: SortOrder
    targetPositionX?: SortOrder
    targetPositionY?: SortOrder
    targetRadius?: SortOrder
    gameRooms?: GameRoomOrderByRelationAggregateInput
  }

  export type PuzzleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PuzzleWhereInput | PuzzleWhereInput[]
    OR?: PuzzleWhereInput[]
    NOT?: PuzzleWhereInput | PuzzleWhereInput[]
    imageUrl?: StringFilter<"Puzzle"> | string
    taskText?: StringFilter<"Puzzle"> | string
    size?: IntFilter<"Puzzle"> | number
    targetPositionX?: FloatFilter<"Puzzle"> | number
    targetPositionY?: FloatFilter<"Puzzle"> | number
    targetRadius?: FloatFilter<"Puzzle"> | number
    gameRooms?: GameRoomListRelationFilter
  }, "id">

  export type PuzzleOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    taskText?: SortOrder
    size?: SortOrder
    targetPositionX?: SortOrder
    targetPositionY?: SortOrder
    targetRadius?: SortOrder
    _count?: PuzzleCountOrderByAggregateInput
    _avg?: PuzzleAvgOrderByAggregateInput
    _max?: PuzzleMaxOrderByAggregateInput
    _min?: PuzzleMinOrderByAggregateInput
    _sum?: PuzzleSumOrderByAggregateInput
  }

  export type PuzzleScalarWhereWithAggregatesInput = {
    AND?: PuzzleScalarWhereWithAggregatesInput | PuzzleScalarWhereWithAggregatesInput[]
    OR?: PuzzleScalarWhereWithAggregatesInput[]
    NOT?: PuzzleScalarWhereWithAggregatesInput | PuzzleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Puzzle"> | number
    imageUrl?: StringWithAggregatesFilter<"Puzzle"> | string
    taskText?: StringWithAggregatesFilter<"Puzzle"> | string
    size?: IntWithAggregatesFilter<"Puzzle"> | number
    targetPositionX?: FloatWithAggregatesFilter<"Puzzle"> | number
    targetPositionY?: FloatWithAggregatesFilter<"Puzzle"> | number
    targetRadius?: FloatWithAggregatesFilter<"Puzzle"> | number
  }

  export type UserCreateInput = {
    id?: string
    name?: string
    role?: $Enums.Role
    accessToken: string
    ready?: boolean
    score?: number
    playerOneGame?: GameRoomCreateNestedOneWithoutPlayer1Input
    playerTwoGame?: GameRoomCreateNestedOneWithoutPlayer2Input
    currentPlayer?: GameRoomCreateNestedOneWithoutCurrentPlayerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string
    role?: $Enums.Role
    accessToken: string
    ready?: boolean
    score?: number
    playerOneGame?: GameRoomUncheckedCreateNestedOneWithoutPlayer1Input
    playerTwoGame?: GameRoomUncheckedCreateNestedOneWithoutPlayer2Input
    currentPlayer?: GameRoomUncheckedCreateNestedOneWithoutCurrentPlayerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    playerOneGame?: GameRoomUpdateOneWithoutPlayer1NestedInput
    playerTwoGame?: GameRoomUpdateOneWithoutPlayer2NestedInput
    currentPlayer?: GameRoomUpdateOneWithoutCurrentPlayerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    playerOneGame?: GameRoomUncheckedUpdateOneWithoutPlayer1NestedInput
    playerTwoGame?: GameRoomUncheckedUpdateOneWithoutPlayer2NestedInput
    currentPlayer?: GameRoomUncheckedUpdateOneWithoutCurrentPlayerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string
    role?: $Enums.Role
    accessToken: string
    ready?: boolean
    score?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
  }

  export type GameRoomCreateInput = {
    inviteCode: number
    status?: $Enums.Status
    currentRound?: number
    maxRound?: number
    player1: UserCreateNestedOneWithoutPlayerOneGameInput
    player2?: UserCreateNestedOneWithoutPlayerTwoGameInput
    currentPlayer?: UserCreateNestedOneWithoutCurrentPlayerInput
    puzzles?: PuzzleCreateNestedManyWithoutGameRoomsInput
  }

  export type GameRoomUncheckedCreateInput = {
    id?: number
    inviteCode: number
    status?: $Enums.Status
    player1Id: string
    player2Id?: string | null
    currentRound?: number
    currentPlayerId?: string | null
    maxRound?: number
    puzzles?: PuzzleUncheckedCreateNestedManyWithoutGameRoomsInput
  }

  export type GameRoomUpdateInput = {
    inviteCode?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    currentRound?: IntFieldUpdateOperationsInput | number
    maxRound?: IntFieldUpdateOperationsInput | number
    player1?: UserUpdateOneRequiredWithoutPlayerOneGameNestedInput
    player2?: UserUpdateOneWithoutPlayerTwoGameNestedInput
    currentPlayer?: UserUpdateOneWithoutCurrentPlayerNestedInput
    puzzles?: PuzzleUpdateManyWithoutGameRoomsNestedInput
  }

  export type GameRoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    currentRound?: IntFieldUpdateOperationsInput | number
    currentPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxRound?: IntFieldUpdateOperationsInput | number
    puzzles?: PuzzleUncheckedUpdateManyWithoutGameRoomsNestedInput
  }

  export type GameRoomCreateManyInput = {
    id?: number
    inviteCode: number
    status?: $Enums.Status
    player1Id: string
    player2Id?: string | null
    currentRound?: number
    currentPlayerId?: string | null
    maxRound?: number
  }

  export type GameRoomUpdateManyMutationInput = {
    inviteCode?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    currentRound?: IntFieldUpdateOperationsInput | number
    maxRound?: IntFieldUpdateOperationsInput | number
  }

  export type GameRoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    currentRound?: IntFieldUpdateOperationsInput | number
    currentPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxRound?: IntFieldUpdateOperationsInput | number
  }

  export type PuzzleCreateInput = {
    imageUrl: string
    taskText: string
    size?: number
    targetPositionX: number
    targetPositionY: number
    targetRadius: number
    gameRooms?: GameRoomCreateNestedManyWithoutPuzzlesInput
  }

  export type PuzzleUncheckedCreateInput = {
    id?: number
    imageUrl: string
    taskText: string
    size?: number
    targetPositionX: number
    targetPositionY: number
    targetRadius: number
    gameRooms?: GameRoomUncheckedCreateNestedManyWithoutPuzzlesInput
  }

  export type PuzzleUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    taskText?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    targetPositionX?: FloatFieldUpdateOperationsInput | number
    targetPositionY?: FloatFieldUpdateOperationsInput | number
    targetRadius?: FloatFieldUpdateOperationsInput | number
    gameRooms?: GameRoomUpdateManyWithoutPuzzlesNestedInput
  }

  export type PuzzleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    taskText?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    targetPositionX?: FloatFieldUpdateOperationsInput | number
    targetPositionY?: FloatFieldUpdateOperationsInput | number
    targetRadius?: FloatFieldUpdateOperationsInput | number
    gameRooms?: GameRoomUncheckedUpdateManyWithoutPuzzlesNestedInput
  }

  export type PuzzleCreateManyInput = {
    id?: number
    imageUrl: string
    taskText: string
    size?: number
    targetPositionX: number
    targetPositionY: number
    targetRadius: number
  }

  export type PuzzleUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    taskText?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    targetPositionX?: FloatFieldUpdateOperationsInput | number
    targetPositionY?: FloatFieldUpdateOperationsInput | number
    targetRadius?: FloatFieldUpdateOperationsInput | number
  }

  export type PuzzleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    taskText?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    targetPositionX?: FloatFieldUpdateOperationsInput | number
    targetPositionY?: FloatFieldUpdateOperationsInput | number
    targetRadius?: FloatFieldUpdateOperationsInput | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GameRoomNullableScalarRelationFilter = {
    is?: GameRoomWhereInput | null
    isNot?: GameRoomWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    accessToken?: SortOrder
    ready?: SortOrder
    score?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    accessToken?: SortOrder
    ready?: SortOrder
    score?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    accessToken?: SortOrder
    ready?: SortOrder
    score?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PuzzleListRelationFilter = {
    every?: PuzzleWhereInput
    some?: PuzzleWhereInput
    none?: PuzzleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PuzzleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameRoomCountOrderByAggregateInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    currentRound?: SortOrder
    currentPlayerId?: SortOrder
    maxRound?: SortOrder
  }

  export type GameRoomAvgOrderByAggregateInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    currentRound?: SortOrder
    maxRound?: SortOrder
  }

  export type GameRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    currentRound?: SortOrder
    currentPlayerId?: SortOrder
    maxRound?: SortOrder
  }

  export type GameRoomMinOrderByAggregateInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    currentRound?: SortOrder
    currentPlayerId?: SortOrder
    maxRound?: SortOrder
  }

  export type GameRoomSumOrderByAggregateInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    currentRound?: SortOrder
    maxRound?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GameRoomListRelationFilter = {
    every?: GameRoomWhereInput
    some?: GameRoomWhereInput
    none?: GameRoomWhereInput
  }

  export type GameRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PuzzleCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    taskText?: SortOrder
    size?: SortOrder
    targetPositionX?: SortOrder
    targetPositionY?: SortOrder
    targetRadius?: SortOrder
  }

  export type PuzzleAvgOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    targetPositionX?: SortOrder
    targetPositionY?: SortOrder
    targetRadius?: SortOrder
  }

  export type PuzzleMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    taskText?: SortOrder
    size?: SortOrder
    targetPositionX?: SortOrder
    targetPositionY?: SortOrder
    targetRadius?: SortOrder
  }

  export type PuzzleMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    taskText?: SortOrder
    size?: SortOrder
    targetPositionX?: SortOrder
    targetPositionY?: SortOrder
    targetRadius?: SortOrder
  }

  export type PuzzleSumOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    targetPositionX?: SortOrder
    targetPositionY?: SortOrder
    targetRadius?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type GameRoomCreateNestedOneWithoutPlayer1Input = {
    create?: XOR<GameRoomCreateWithoutPlayer1Input, GameRoomUncheckedCreateWithoutPlayer1Input>
    connectOrCreate?: GameRoomCreateOrConnectWithoutPlayer1Input
    connect?: GameRoomWhereUniqueInput
  }

  export type GameRoomCreateNestedOneWithoutPlayer2Input = {
    create?: XOR<GameRoomCreateWithoutPlayer2Input, GameRoomUncheckedCreateWithoutPlayer2Input>
    connectOrCreate?: GameRoomCreateOrConnectWithoutPlayer2Input
    connect?: GameRoomWhereUniqueInput
  }

  export type GameRoomCreateNestedOneWithoutCurrentPlayerInput = {
    create?: XOR<GameRoomCreateWithoutCurrentPlayerInput, GameRoomUncheckedCreateWithoutCurrentPlayerInput>
    connectOrCreate?: GameRoomCreateOrConnectWithoutCurrentPlayerInput
    connect?: GameRoomWhereUniqueInput
  }

  export type GameRoomUncheckedCreateNestedOneWithoutPlayer1Input = {
    create?: XOR<GameRoomCreateWithoutPlayer1Input, GameRoomUncheckedCreateWithoutPlayer1Input>
    connectOrCreate?: GameRoomCreateOrConnectWithoutPlayer1Input
    connect?: GameRoomWhereUniqueInput
  }

  export type GameRoomUncheckedCreateNestedOneWithoutPlayer2Input = {
    create?: XOR<GameRoomCreateWithoutPlayer2Input, GameRoomUncheckedCreateWithoutPlayer2Input>
    connectOrCreate?: GameRoomCreateOrConnectWithoutPlayer2Input
    connect?: GameRoomWhereUniqueInput
  }

  export type GameRoomUncheckedCreateNestedOneWithoutCurrentPlayerInput = {
    create?: XOR<GameRoomCreateWithoutCurrentPlayerInput, GameRoomUncheckedCreateWithoutCurrentPlayerInput>
    connectOrCreate?: GameRoomCreateOrConnectWithoutCurrentPlayerInput
    connect?: GameRoomWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameRoomUpdateOneWithoutPlayer1NestedInput = {
    create?: XOR<GameRoomCreateWithoutPlayer1Input, GameRoomUncheckedCreateWithoutPlayer1Input>
    connectOrCreate?: GameRoomCreateOrConnectWithoutPlayer1Input
    upsert?: GameRoomUpsertWithoutPlayer1Input
    disconnect?: GameRoomWhereInput | boolean
    delete?: GameRoomWhereInput | boolean
    connect?: GameRoomWhereUniqueInput
    update?: XOR<XOR<GameRoomUpdateToOneWithWhereWithoutPlayer1Input, GameRoomUpdateWithoutPlayer1Input>, GameRoomUncheckedUpdateWithoutPlayer1Input>
  }

  export type GameRoomUpdateOneWithoutPlayer2NestedInput = {
    create?: XOR<GameRoomCreateWithoutPlayer2Input, GameRoomUncheckedCreateWithoutPlayer2Input>
    connectOrCreate?: GameRoomCreateOrConnectWithoutPlayer2Input
    upsert?: GameRoomUpsertWithoutPlayer2Input
    disconnect?: GameRoomWhereInput | boolean
    delete?: GameRoomWhereInput | boolean
    connect?: GameRoomWhereUniqueInput
    update?: XOR<XOR<GameRoomUpdateToOneWithWhereWithoutPlayer2Input, GameRoomUpdateWithoutPlayer2Input>, GameRoomUncheckedUpdateWithoutPlayer2Input>
  }

  export type GameRoomUpdateOneWithoutCurrentPlayerNestedInput = {
    create?: XOR<GameRoomCreateWithoutCurrentPlayerInput, GameRoomUncheckedCreateWithoutCurrentPlayerInput>
    connectOrCreate?: GameRoomCreateOrConnectWithoutCurrentPlayerInput
    upsert?: GameRoomUpsertWithoutCurrentPlayerInput
    disconnect?: GameRoomWhereInput | boolean
    delete?: GameRoomWhereInput | boolean
    connect?: GameRoomWhereUniqueInput
    update?: XOR<XOR<GameRoomUpdateToOneWithWhereWithoutCurrentPlayerInput, GameRoomUpdateWithoutCurrentPlayerInput>, GameRoomUncheckedUpdateWithoutCurrentPlayerInput>
  }

  export type GameRoomUncheckedUpdateOneWithoutPlayer1NestedInput = {
    create?: XOR<GameRoomCreateWithoutPlayer1Input, GameRoomUncheckedCreateWithoutPlayer1Input>
    connectOrCreate?: GameRoomCreateOrConnectWithoutPlayer1Input
    upsert?: GameRoomUpsertWithoutPlayer1Input
    disconnect?: GameRoomWhereInput | boolean
    delete?: GameRoomWhereInput | boolean
    connect?: GameRoomWhereUniqueInput
    update?: XOR<XOR<GameRoomUpdateToOneWithWhereWithoutPlayer1Input, GameRoomUpdateWithoutPlayer1Input>, GameRoomUncheckedUpdateWithoutPlayer1Input>
  }

  export type GameRoomUncheckedUpdateOneWithoutPlayer2NestedInput = {
    create?: XOR<GameRoomCreateWithoutPlayer2Input, GameRoomUncheckedCreateWithoutPlayer2Input>
    connectOrCreate?: GameRoomCreateOrConnectWithoutPlayer2Input
    upsert?: GameRoomUpsertWithoutPlayer2Input
    disconnect?: GameRoomWhereInput | boolean
    delete?: GameRoomWhereInput | boolean
    connect?: GameRoomWhereUniqueInput
    update?: XOR<XOR<GameRoomUpdateToOneWithWhereWithoutPlayer2Input, GameRoomUpdateWithoutPlayer2Input>, GameRoomUncheckedUpdateWithoutPlayer2Input>
  }

  export type GameRoomUncheckedUpdateOneWithoutCurrentPlayerNestedInput = {
    create?: XOR<GameRoomCreateWithoutCurrentPlayerInput, GameRoomUncheckedCreateWithoutCurrentPlayerInput>
    connectOrCreate?: GameRoomCreateOrConnectWithoutCurrentPlayerInput
    upsert?: GameRoomUpsertWithoutCurrentPlayerInput
    disconnect?: GameRoomWhereInput | boolean
    delete?: GameRoomWhereInput | boolean
    connect?: GameRoomWhereUniqueInput
    update?: XOR<XOR<GameRoomUpdateToOneWithWhereWithoutCurrentPlayerInput, GameRoomUpdateWithoutCurrentPlayerInput>, GameRoomUncheckedUpdateWithoutCurrentPlayerInput>
  }

  export type UserCreateNestedOneWithoutPlayerOneGameInput = {
    create?: XOR<UserCreateWithoutPlayerOneGameInput, UserUncheckedCreateWithoutPlayerOneGameInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerOneGameInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPlayerTwoGameInput = {
    create?: XOR<UserCreateWithoutPlayerTwoGameInput, UserUncheckedCreateWithoutPlayerTwoGameInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerTwoGameInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCurrentPlayerInput = {
    create?: XOR<UserCreateWithoutCurrentPlayerInput, UserUncheckedCreateWithoutCurrentPlayerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCurrentPlayerInput
    connect?: UserWhereUniqueInput
  }

  export type PuzzleCreateNestedManyWithoutGameRoomsInput = {
    create?: XOR<PuzzleCreateWithoutGameRoomsInput, PuzzleUncheckedCreateWithoutGameRoomsInput> | PuzzleCreateWithoutGameRoomsInput[] | PuzzleUncheckedCreateWithoutGameRoomsInput[]
    connectOrCreate?: PuzzleCreateOrConnectWithoutGameRoomsInput | PuzzleCreateOrConnectWithoutGameRoomsInput[]
    connect?: PuzzleWhereUniqueInput | PuzzleWhereUniqueInput[]
  }

  export type PuzzleUncheckedCreateNestedManyWithoutGameRoomsInput = {
    create?: XOR<PuzzleCreateWithoutGameRoomsInput, PuzzleUncheckedCreateWithoutGameRoomsInput> | PuzzleCreateWithoutGameRoomsInput[] | PuzzleUncheckedCreateWithoutGameRoomsInput[]
    connectOrCreate?: PuzzleCreateOrConnectWithoutGameRoomsInput | PuzzleCreateOrConnectWithoutGameRoomsInput[]
    connect?: PuzzleWhereUniqueInput | PuzzleWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutPlayerOneGameNestedInput = {
    create?: XOR<UserCreateWithoutPlayerOneGameInput, UserUncheckedCreateWithoutPlayerOneGameInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerOneGameInput
    upsert?: UserUpsertWithoutPlayerOneGameInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayerOneGameInput, UserUpdateWithoutPlayerOneGameInput>, UserUncheckedUpdateWithoutPlayerOneGameInput>
  }

  export type UserUpdateOneWithoutPlayerTwoGameNestedInput = {
    create?: XOR<UserCreateWithoutPlayerTwoGameInput, UserUncheckedCreateWithoutPlayerTwoGameInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerTwoGameInput
    upsert?: UserUpsertWithoutPlayerTwoGameInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayerTwoGameInput, UserUpdateWithoutPlayerTwoGameInput>, UserUncheckedUpdateWithoutPlayerTwoGameInput>
  }

  export type UserUpdateOneWithoutCurrentPlayerNestedInput = {
    create?: XOR<UserCreateWithoutCurrentPlayerInput, UserUncheckedCreateWithoutCurrentPlayerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCurrentPlayerInput
    upsert?: UserUpsertWithoutCurrentPlayerInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCurrentPlayerInput, UserUpdateWithoutCurrentPlayerInput>, UserUncheckedUpdateWithoutCurrentPlayerInput>
  }

  export type PuzzleUpdateManyWithoutGameRoomsNestedInput = {
    create?: XOR<PuzzleCreateWithoutGameRoomsInput, PuzzleUncheckedCreateWithoutGameRoomsInput> | PuzzleCreateWithoutGameRoomsInput[] | PuzzleUncheckedCreateWithoutGameRoomsInput[]
    connectOrCreate?: PuzzleCreateOrConnectWithoutGameRoomsInput | PuzzleCreateOrConnectWithoutGameRoomsInput[]
    upsert?: PuzzleUpsertWithWhereUniqueWithoutGameRoomsInput | PuzzleUpsertWithWhereUniqueWithoutGameRoomsInput[]
    set?: PuzzleWhereUniqueInput | PuzzleWhereUniqueInput[]
    disconnect?: PuzzleWhereUniqueInput | PuzzleWhereUniqueInput[]
    delete?: PuzzleWhereUniqueInput | PuzzleWhereUniqueInput[]
    connect?: PuzzleWhereUniqueInput | PuzzleWhereUniqueInput[]
    update?: PuzzleUpdateWithWhereUniqueWithoutGameRoomsInput | PuzzleUpdateWithWhereUniqueWithoutGameRoomsInput[]
    updateMany?: PuzzleUpdateManyWithWhereWithoutGameRoomsInput | PuzzleUpdateManyWithWhereWithoutGameRoomsInput[]
    deleteMany?: PuzzleScalarWhereInput | PuzzleScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PuzzleUncheckedUpdateManyWithoutGameRoomsNestedInput = {
    create?: XOR<PuzzleCreateWithoutGameRoomsInput, PuzzleUncheckedCreateWithoutGameRoomsInput> | PuzzleCreateWithoutGameRoomsInput[] | PuzzleUncheckedCreateWithoutGameRoomsInput[]
    connectOrCreate?: PuzzleCreateOrConnectWithoutGameRoomsInput | PuzzleCreateOrConnectWithoutGameRoomsInput[]
    upsert?: PuzzleUpsertWithWhereUniqueWithoutGameRoomsInput | PuzzleUpsertWithWhereUniqueWithoutGameRoomsInput[]
    set?: PuzzleWhereUniqueInput | PuzzleWhereUniqueInput[]
    disconnect?: PuzzleWhereUniqueInput | PuzzleWhereUniqueInput[]
    delete?: PuzzleWhereUniqueInput | PuzzleWhereUniqueInput[]
    connect?: PuzzleWhereUniqueInput | PuzzleWhereUniqueInput[]
    update?: PuzzleUpdateWithWhereUniqueWithoutGameRoomsInput | PuzzleUpdateWithWhereUniqueWithoutGameRoomsInput[]
    updateMany?: PuzzleUpdateManyWithWhereWithoutGameRoomsInput | PuzzleUpdateManyWithWhereWithoutGameRoomsInput[]
    deleteMany?: PuzzleScalarWhereInput | PuzzleScalarWhereInput[]
  }

  export type GameRoomCreateNestedManyWithoutPuzzlesInput = {
    create?: XOR<GameRoomCreateWithoutPuzzlesInput, GameRoomUncheckedCreateWithoutPuzzlesInput> | GameRoomCreateWithoutPuzzlesInput[] | GameRoomUncheckedCreateWithoutPuzzlesInput[]
    connectOrCreate?: GameRoomCreateOrConnectWithoutPuzzlesInput | GameRoomCreateOrConnectWithoutPuzzlesInput[]
    connect?: GameRoomWhereUniqueInput | GameRoomWhereUniqueInput[]
  }

  export type GameRoomUncheckedCreateNestedManyWithoutPuzzlesInput = {
    create?: XOR<GameRoomCreateWithoutPuzzlesInput, GameRoomUncheckedCreateWithoutPuzzlesInput> | GameRoomCreateWithoutPuzzlesInput[] | GameRoomUncheckedCreateWithoutPuzzlesInput[]
    connectOrCreate?: GameRoomCreateOrConnectWithoutPuzzlesInput | GameRoomCreateOrConnectWithoutPuzzlesInput[]
    connect?: GameRoomWhereUniqueInput | GameRoomWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameRoomUpdateManyWithoutPuzzlesNestedInput = {
    create?: XOR<GameRoomCreateWithoutPuzzlesInput, GameRoomUncheckedCreateWithoutPuzzlesInput> | GameRoomCreateWithoutPuzzlesInput[] | GameRoomUncheckedCreateWithoutPuzzlesInput[]
    connectOrCreate?: GameRoomCreateOrConnectWithoutPuzzlesInput | GameRoomCreateOrConnectWithoutPuzzlesInput[]
    upsert?: GameRoomUpsertWithWhereUniqueWithoutPuzzlesInput | GameRoomUpsertWithWhereUniqueWithoutPuzzlesInput[]
    set?: GameRoomWhereUniqueInput | GameRoomWhereUniqueInput[]
    disconnect?: GameRoomWhereUniqueInput | GameRoomWhereUniqueInput[]
    delete?: GameRoomWhereUniqueInput | GameRoomWhereUniqueInput[]
    connect?: GameRoomWhereUniqueInput | GameRoomWhereUniqueInput[]
    update?: GameRoomUpdateWithWhereUniqueWithoutPuzzlesInput | GameRoomUpdateWithWhereUniqueWithoutPuzzlesInput[]
    updateMany?: GameRoomUpdateManyWithWhereWithoutPuzzlesInput | GameRoomUpdateManyWithWhereWithoutPuzzlesInput[]
    deleteMany?: GameRoomScalarWhereInput | GameRoomScalarWhereInput[]
  }

  export type GameRoomUncheckedUpdateManyWithoutPuzzlesNestedInput = {
    create?: XOR<GameRoomCreateWithoutPuzzlesInput, GameRoomUncheckedCreateWithoutPuzzlesInput> | GameRoomCreateWithoutPuzzlesInput[] | GameRoomUncheckedCreateWithoutPuzzlesInput[]
    connectOrCreate?: GameRoomCreateOrConnectWithoutPuzzlesInput | GameRoomCreateOrConnectWithoutPuzzlesInput[]
    upsert?: GameRoomUpsertWithWhereUniqueWithoutPuzzlesInput | GameRoomUpsertWithWhereUniqueWithoutPuzzlesInput[]
    set?: GameRoomWhereUniqueInput | GameRoomWhereUniqueInput[]
    disconnect?: GameRoomWhereUniqueInput | GameRoomWhereUniqueInput[]
    delete?: GameRoomWhereUniqueInput | GameRoomWhereUniqueInput[]
    connect?: GameRoomWhereUniqueInput | GameRoomWhereUniqueInput[]
    update?: GameRoomUpdateWithWhereUniqueWithoutPuzzlesInput | GameRoomUpdateWithWhereUniqueWithoutPuzzlesInput[]
    updateMany?: GameRoomUpdateManyWithWhereWithoutPuzzlesInput | GameRoomUpdateManyWithWhereWithoutPuzzlesInput[]
    deleteMany?: GameRoomScalarWhereInput | GameRoomScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type GameRoomCreateWithoutPlayer1Input = {
    inviteCode: number
    status?: $Enums.Status
    currentRound?: number
    maxRound?: number
    player2?: UserCreateNestedOneWithoutPlayerTwoGameInput
    currentPlayer?: UserCreateNestedOneWithoutCurrentPlayerInput
    puzzles?: PuzzleCreateNestedManyWithoutGameRoomsInput
  }

  export type GameRoomUncheckedCreateWithoutPlayer1Input = {
    id?: number
    inviteCode: number
    status?: $Enums.Status
    player2Id?: string | null
    currentRound?: number
    currentPlayerId?: string | null
    maxRound?: number
    puzzles?: PuzzleUncheckedCreateNestedManyWithoutGameRoomsInput
  }

  export type GameRoomCreateOrConnectWithoutPlayer1Input = {
    where: GameRoomWhereUniqueInput
    create: XOR<GameRoomCreateWithoutPlayer1Input, GameRoomUncheckedCreateWithoutPlayer1Input>
  }

  export type GameRoomCreateWithoutPlayer2Input = {
    inviteCode: number
    status?: $Enums.Status
    currentRound?: number
    maxRound?: number
    player1: UserCreateNestedOneWithoutPlayerOneGameInput
    currentPlayer?: UserCreateNestedOneWithoutCurrentPlayerInput
    puzzles?: PuzzleCreateNestedManyWithoutGameRoomsInput
  }

  export type GameRoomUncheckedCreateWithoutPlayer2Input = {
    id?: number
    inviteCode: number
    status?: $Enums.Status
    player1Id: string
    currentRound?: number
    currentPlayerId?: string | null
    maxRound?: number
    puzzles?: PuzzleUncheckedCreateNestedManyWithoutGameRoomsInput
  }

  export type GameRoomCreateOrConnectWithoutPlayer2Input = {
    where: GameRoomWhereUniqueInput
    create: XOR<GameRoomCreateWithoutPlayer2Input, GameRoomUncheckedCreateWithoutPlayer2Input>
  }

  export type GameRoomCreateWithoutCurrentPlayerInput = {
    inviteCode: number
    status?: $Enums.Status
    currentRound?: number
    maxRound?: number
    player1: UserCreateNestedOneWithoutPlayerOneGameInput
    player2?: UserCreateNestedOneWithoutPlayerTwoGameInput
    puzzles?: PuzzleCreateNestedManyWithoutGameRoomsInput
  }

  export type GameRoomUncheckedCreateWithoutCurrentPlayerInput = {
    id?: number
    inviteCode: number
    status?: $Enums.Status
    player1Id: string
    player2Id?: string | null
    currentRound?: number
    maxRound?: number
    puzzles?: PuzzleUncheckedCreateNestedManyWithoutGameRoomsInput
  }

  export type GameRoomCreateOrConnectWithoutCurrentPlayerInput = {
    where: GameRoomWhereUniqueInput
    create: XOR<GameRoomCreateWithoutCurrentPlayerInput, GameRoomUncheckedCreateWithoutCurrentPlayerInput>
  }

  export type GameRoomUpsertWithoutPlayer1Input = {
    update: XOR<GameRoomUpdateWithoutPlayer1Input, GameRoomUncheckedUpdateWithoutPlayer1Input>
    create: XOR<GameRoomCreateWithoutPlayer1Input, GameRoomUncheckedCreateWithoutPlayer1Input>
    where?: GameRoomWhereInput
  }

  export type GameRoomUpdateToOneWithWhereWithoutPlayer1Input = {
    where?: GameRoomWhereInput
    data: XOR<GameRoomUpdateWithoutPlayer1Input, GameRoomUncheckedUpdateWithoutPlayer1Input>
  }

  export type GameRoomUpdateWithoutPlayer1Input = {
    inviteCode?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    currentRound?: IntFieldUpdateOperationsInput | number
    maxRound?: IntFieldUpdateOperationsInput | number
    player2?: UserUpdateOneWithoutPlayerTwoGameNestedInput
    currentPlayer?: UserUpdateOneWithoutCurrentPlayerNestedInput
    puzzles?: PuzzleUpdateManyWithoutGameRoomsNestedInput
  }

  export type GameRoomUncheckedUpdateWithoutPlayer1Input = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    currentRound?: IntFieldUpdateOperationsInput | number
    currentPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxRound?: IntFieldUpdateOperationsInput | number
    puzzles?: PuzzleUncheckedUpdateManyWithoutGameRoomsNestedInput
  }

  export type GameRoomUpsertWithoutPlayer2Input = {
    update: XOR<GameRoomUpdateWithoutPlayer2Input, GameRoomUncheckedUpdateWithoutPlayer2Input>
    create: XOR<GameRoomCreateWithoutPlayer2Input, GameRoomUncheckedCreateWithoutPlayer2Input>
    where?: GameRoomWhereInput
  }

  export type GameRoomUpdateToOneWithWhereWithoutPlayer2Input = {
    where?: GameRoomWhereInput
    data: XOR<GameRoomUpdateWithoutPlayer2Input, GameRoomUncheckedUpdateWithoutPlayer2Input>
  }

  export type GameRoomUpdateWithoutPlayer2Input = {
    inviteCode?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    currentRound?: IntFieldUpdateOperationsInput | number
    maxRound?: IntFieldUpdateOperationsInput | number
    player1?: UserUpdateOneRequiredWithoutPlayerOneGameNestedInput
    currentPlayer?: UserUpdateOneWithoutCurrentPlayerNestedInput
    puzzles?: PuzzleUpdateManyWithoutGameRoomsNestedInput
  }

  export type GameRoomUncheckedUpdateWithoutPlayer2Input = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    player1Id?: StringFieldUpdateOperationsInput | string
    currentRound?: IntFieldUpdateOperationsInput | number
    currentPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxRound?: IntFieldUpdateOperationsInput | number
    puzzles?: PuzzleUncheckedUpdateManyWithoutGameRoomsNestedInput
  }

  export type GameRoomUpsertWithoutCurrentPlayerInput = {
    update: XOR<GameRoomUpdateWithoutCurrentPlayerInput, GameRoomUncheckedUpdateWithoutCurrentPlayerInput>
    create: XOR<GameRoomCreateWithoutCurrentPlayerInput, GameRoomUncheckedCreateWithoutCurrentPlayerInput>
    where?: GameRoomWhereInput
  }

  export type GameRoomUpdateToOneWithWhereWithoutCurrentPlayerInput = {
    where?: GameRoomWhereInput
    data: XOR<GameRoomUpdateWithoutCurrentPlayerInput, GameRoomUncheckedUpdateWithoutCurrentPlayerInput>
  }

  export type GameRoomUpdateWithoutCurrentPlayerInput = {
    inviteCode?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    currentRound?: IntFieldUpdateOperationsInput | number
    maxRound?: IntFieldUpdateOperationsInput | number
    player1?: UserUpdateOneRequiredWithoutPlayerOneGameNestedInput
    player2?: UserUpdateOneWithoutPlayerTwoGameNestedInput
    puzzles?: PuzzleUpdateManyWithoutGameRoomsNestedInput
  }

  export type GameRoomUncheckedUpdateWithoutCurrentPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    currentRound?: IntFieldUpdateOperationsInput | number
    maxRound?: IntFieldUpdateOperationsInput | number
    puzzles?: PuzzleUncheckedUpdateManyWithoutGameRoomsNestedInput
  }

  export type UserCreateWithoutPlayerOneGameInput = {
    id?: string
    name?: string
    role?: $Enums.Role
    accessToken: string
    ready?: boolean
    score?: number
    playerTwoGame?: GameRoomCreateNestedOneWithoutPlayer2Input
    currentPlayer?: GameRoomCreateNestedOneWithoutCurrentPlayerInput
  }

  export type UserUncheckedCreateWithoutPlayerOneGameInput = {
    id?: string
    name?: string
    role?: $Enums.Role
    accessToken: string
    ready?: boolean
    score?: number
    playerTwoGame?: GameRoomUncheckedCreateNestedOneWithoutPlayer2Input
    currentPlayer?: GameRoomUncheckedCreateNestedOneWithoutCurrentPlayerInput
  }

  export type UserCreateOrConnectWithoutPlayerOneGameInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayerOneGameInput, UserUncheckedCreateWithoutPlayerOneGameInput>
  }

  export type UserCreateWithoutPlayerTwoGameInput = {
    id?: string
    name?: string
    role?: $Enums.Role
    accessToken: string
    ready?: boolean
    score?: number
    playerOneGame?: GameRoomCreateNestedOneWithoutPlayer1Input
    currentPlayer?: GameRoomCreateNestedOneWithoutCurrentPlayerInput
  }

  export type UserUncheckedCreateWithoutPlayerTwoGameInput = {
    id?: string
    name?: string
    role?: $Enums.Role
    accessToken: string
    ready?: boolean
    score?: number
    playerOneGame?: GameRoomUncheckedCreateNestedOneWithoutPlayer1Input
    currentPlayer?: GameRoomUncheckedCreateNestedOneWithoutCurrentPlayerInput
  }

  export type UserCreateOrConnectWithoutPlayerTwoGameInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayerTwoGameInput, UserUncheckedCreateWithoutPlayerTwoGameInput>
  }

  export type UserCreateWithoutCurrentPlayerInput = {
    id?: string
    name?: string
    role?: $Enums.Role
    accessToken: string
    ready?: boolean
    score?: number
    playerOneGame?: GameRoomCreateNestedOneWithoutPlayer1Input
    playerTwoGame?: GameRoomCreateNestedOneWithoutPlayer2Input
  }

  export type UserUncheckedCreateWithoutCurrentPlayerInput = {
    id?: string
    name?: string
    role?: $Enums.Role
    accessToken: string
    ready?: boolean
    score?: number
    playerOneGame?: GameRoomUncheckedCreateNestedOneWithoutPlayer1Input
    playerTwoGame?: GameRoomUncheckedCreateNestedOneWithoutPlayer2Input
  }

  export type UserCreateOrConnectWithoutCurrentPlayerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCurrentPlayerInput, UserUncheckedCreateWithoutCurrentPlayerInput>
  }

  export type PuzzleCreateWithoutGameRoomsInput = {
    imageUrl: string
    taskText: string
    size?: number
    targetPositionX: number
    targetPositionY: number
    targetRadius: number
  }

  export type PuzzleUncheckedCreateWithoutGameRoomsInput = {
    id?: number
    imageUrl: string
    taskText: string
    size?: number
    targetPositionX: number
    targetPositionY: number
    targetRadius: number
  }

  export type PuzzleCreateOrConnectWithoutGameRoomsInput = {
    where: PuzzleWhereUniqueInput
    create: XOR<PuzzleCreateWithoutGameRoomsInput, PuzzleUncheckedCreateWithoutGameRoomsInput>
  }

  export type UserUpsertWithoutPlayerOneGameInput = {
    update: XOR<UserUpdateWithoutPlayerOneGameInput, UserUncheckedUpdateWithoutPlayerOneGameInput>
    create: XOR<UserCreateWithoutPlayerOneGameInput, UserUncheckedCreateWithoutPlayerOneGameInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayerOneGameInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayerOneGameInput, UserUncheckedUpdateWithoutPlayerOneGameInput>
  }

  export type UserUpdateWithoutPlayerOneGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    playerTwoGame?: GameRoomUpdateOneWithoutPlayer2NestedInput
    currentPlayer?: GameRoomUpdateOneWithoutCurrentPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayerOneGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    playerTwoGame?: GameRoomUncheckedUpdateOneWithoutPlayer2NestedInput
    currentPlayer?: GameRoomUncheckedUpdateOneWithoutCurrentPlayerNestedInput
  }

  export type UserUpsertWithoutPlayerTwoGameInput = {
    update: XOR<UserUpdateWithoutPlayerTwoGameInput, UserUncheckedUpdateWithoutPlayerTwoGameInput>
    create: XOR<UserCreateWithoutPlayerTwoGameInput, UserUncheckedCreateWithoutPlayerTwoGameInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayerTwoGameInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayerTwoGameInput, UserUncheckedUpdateWithoutPlayerTwoGameInput>
  }

  export type UserUpdateWithoutPlayerTwoGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    playerOneGame?: GameRoomUpdateOneWithoutPlayer1NestedInput
    currentPlayer?: GameRoomUpdateOneWithoutCurrentPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayerTwoGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    playerOneGame?: GameRoomUncheckedUpdateOneWithoutPlayer1NestedInput
    currentPlayer?: GameRoomUncheckedUpdateOneWithoutCurrentPlayerNestedInput
  }

  export type UserUpsertWithoutCurrentPlayerInput = {
    update: XOR<UserUpdateWithoutCurrentPlayerInput, UserUncheckedUpdateWithoutCurrentPlayerInput>
    create: XOR<UserCreateWithoutCurrentPlayerInput, UserUncheckedCreateWithoutCurrentPlayerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCurrentPlayerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCurrentPlayerInput, UserUncheckedUpdateWithoutCurrentPlayerInput>
  }

  export type UserUpdateWithoutCurrentPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    playerOneGame?: GameRoomUpdateOneWithoutPlayer1NestedInput
    playerTwoGame?: GameRoomUpdateOneWithoutPlayer2NestedInput
  }

  export type UserUncheckedUpdateWithoutCurrentPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    playerOneGame?: GameRoomUncheckedUpdateOneWithoutPlayer1NestedInput
    playerTwoGame?: GameRoomUncheckedUpdateOneWithoutPlayer2NestedInput
  }

  export type PuzzleUpsertWithWhereUniqueWithoutGameRoomsInput = {
    where: PuzzleWhereUniqueInput
    update: XOR<PuzzleUpdateWithoutGameRoomsInput, PuzzleUncheckedUpdateWithoutGameRoomsInput>
    create: XOR<PuzzleCreateWithoutGameRoomsInput, PuzzleUncheckedCreateWithoutGameRoomsInput>
  }

  export type PuzzleUpdateWithWhereUniqueWithoutGameRoomsInput = {
    where: PuzzleWhereUniqueInput
    data: XOR<PuzzleUpdateWithoutGameRoomsInput, PuzzleUncheckedUpdateWithoutGameRoomsInput>
  }

  export type PuzzleUpdateManyWithWhereWithoutGameRoomsInput = {
    where: PuzzleScalarWhereInput
    data: XOR<PuzzleUpdateManyMutationInput, PuzzleUncheckedUpdateManyWithoutGameRoomsInput>
  }

  export type PuzzleScalarWhereInput = {
    AND?: PuzzleScalarWhereInput | PuzzleScalarWhereInput[]
    OR?: PuzzleScalarWhereInput[]
    NOT?: PuzzleScalarWhereInput | PuzzleScalarWhereInput[]
    id?: IntFilter<"Puzzle"> | number
    imageUrl?: StringFilter<"Puzzle"> | string
    taskText?: StringFilter<"Puzzle"> | string
    size?: IntFilter<"Puzzle"> | number
    targetPositionX?: FloatFilter<"Puzzle"> | number
    targetPositionY?: FloatFilter<"Puzzle"> | number
    targetRadius?: FloatFilter<"Puzzle"> | number
  }

  export type GameRoomCreateWithoutPuzzlesInput = {
    inviteCode: number
    status?: $Enums.Status
    currentRound?: number
    maxRound?: number
    player1: UserCreateNestedOneWithoutPlayerOneGameInput
    player2?: UserCreateNestedOneWithoutPlayerTwoGameInput
    currentPlayer?: UserCreateNestedOneWithoutCurrentPlayerInput
  }

  export type GameRoomUncheckedCreateWithoutPuzzlesInput = {
    id?: number
    inviteCode: number
    status?: $Enums.Status
    player1Id: string
    player2Id?: string | null
    currentRound?: number
    currentPlayerId?: string | null
    maxRound?: number
  }

  export type GameRoomCreateOrConnectWithoutPuzzlesInput = {
    where: GameRoomWhereUniqueInput
    create: XOR<GameRoomCreateWithoutPuzzlesInput, GameRoomUncheckedCreateWithoutPuzzlesInput>
  }

  export type GameRoomUpsertWithWhereUniqueWithoutPuzzlesInput = {
    where: GameRoomWhereUniqueInput
    update: XOR<GameRoomUpdateWithoutPuzzlesInput, GameRoomUncheckedUpdateWithoutPuzzlesInput>
    create: XOR<GameRoomCreateWithoutPuzzlesInput, GameRoomUncheckedCreateWithoutPuzzlesInput>
  }

  export type GameRoomUpdateWithWhereUniqueWithoutPuzzlesInput = {
    where: GameRoomWhereUniqueInput
    data: XOR<GameRoomUpdateWithoutPuzzlesInput, GameRoomUncheckedUpdateWithoutPuzzlesInput>
  }

  export type GameRoomUpdateManyWithWhereWithoutPuzzlesInput = {
    where: GameRoomScalarWhereInput
    data: XOR<GameRoomUpdateManyMutationInput, GameRoomUncheckedUpdateManyWithoutPuzzlesInput>
  }

  export type GameRoomScalarWhereInput = {
    AND?: GameRoomScalarWhereInput | GameRoomScalarWhereInput[]
    OR?: GameRoomScalarWhereInput[]
    NOT?: GameRoomScalarWhereInput | GameRoomScalarWhereInput[]
    id?: IntFilter<"GameRoom"> | number
    inviteCode?: IntFilter<"GameRoom"> | number
    status?: EnumStatusFilter<"GameRoom"> | $Enums.Status
    player1Id?: UuidFilter<"GameRoom"> | string
    player2Id?: UuidNullableFilter<"GameRoom"> | string | null
    currentRound?: IntFilter<"GameRoom"> | number
    currentPlayerId?: UuidNullableFilter<"GameRoom"> | string | null
    maxRound?: IntFilter<"GameRoom"> | number
  }

  export type PuzzleUpdateWithoutGameRoomsInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    taskText?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    targetPositionX?: FloatFieldUpdateOperationsInput | number
    targetPositionY?: FloatFieldUpdateOperationsInput | number
    targetRadius?: FloatFieldUpdateOperationsInput | number
  }

  export type PuzzleUncheckedUpdateWithoutGameRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    taskText?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    targetPositionX?: FloatFieldUpdateOperationsInput | number
    targetPositionY?: FloatFieldUpdateOperationsInput | number
    targetRadius?: FloatFieldUpdateOperationsInput | number
  }

  export type PuzzleUncheckedUpdateManyWithoutGameRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    taskText?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    targetPositionX?: FloatFieldUpdateOperationsInput | number
    targetPositionY?: FloatFieldUpdateOperationsInput | number
    targetRadius?: FloatFieldUpdateOperationsInput | number
  }

  export type GameRoomUpdateWithoutPuzzlesInput = {
    inviteCode?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    currentRound?: IntFieldUpdateOperationsInput | number
    maxRound?: IntFieldUpdateOperationsInput | number
    player1?: UserUpdateOneRequiredWithoutPlayerOneGameNestedInput
    player2?: UserUpdateOneWithoutPlayerTwoGameNestedInput
    currentPlayer?: UserUpdateOneWithoutCurrentPlayerNestedInput
  }

  export type GameRoomUncheckedUpdateWithoutPuzzlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    currentRound?: IntFieldUpdateOperationsInput | number
    currentPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxRound?: IntFieldUpdateOperationsInput | number
  }

  export type GameRoomUncheckedUpdateManyWithoutPuzzlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    currentRound?: IntFieldUpdateOperationsInput | number
    currentPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxRound?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}