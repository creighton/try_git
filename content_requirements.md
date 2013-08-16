## Content Requirements

#### 4.0 Statement
*   1.  A Statement MUST use each property no more than one time.
*   2.  A Statement MUST use the “actor”, “verb”, and “object” properties.
*   3.  A Statement MAY use its properties in any order.

#### 4.1.2.1 When the Actor ObjectType is Agent
*   1.  An Agent MUST be identified by one (1) of the four types of Inverse Functional Identifiers.
*   2.  An Agent MUST NOT include more than one (1) Inverse Functional Identifier.
*   3.  An Agent SHOULD NOT use Inverse Functional Identifiers that are also used as a Group identifier.

#### 4.1.2.3 Inverse Functional Identifier
*   1.  mbox property - The required format is mailto:email address. Only email addresses that have only ever been and will ever be assigned to this Agent, but no others, should be used for this property and mbox_sha1sum.

#### 4.1.2.2 When the Actor ObjectType is Group
*   1.  An Anonymous Group MUST include a 'member' property listing constituent Agents.
*   2.  An Anonymous Group MUST NOT contain Group Objects in the 'member' property.
*   3.  An Anonymous Group MUST NOT include any Inverse Functional Identifiers.
*   4.  An Identified Group MUST include exactly one (1) Inverse Functional Identifier.
*   5.  An Identified Group MUST NOT contain Group Objects in the 'member' property.
*   6.  An Identified Group SHOULD NOT use Inverse Functional Identifiers that are also used as Agent identifiers.
*   7.  An Identified Group MAY include a 'member' property listing constituent Agents.

#### 4.1.3 Verb
*   1.  Id property -The IRI should be human-readable and contain the Verb meaning. 
*   2.  The display property MUST be used to illustrate the meaning which is already determined by the Verb IRI.
*   3.  A system reading a Statement MUST use the Verb IRI to infer meaning.
*   4.  The display property MUST NOT be used to alter the meaning of a Verb.
*   5.  A system reading a Statement MUST NOT use the display property to infer any meaning from the Statement.
*   6.  A system reading a Statement MUST NOT use the display property for any purpose other than display to a human. Using the display property for aggregation or categorization of Statements is an example of violating this requirement.
*   7.  The display property SHOULD be used by all Statements.
*   8.  The IRI contained in the id SHOULD be human-readable and imply the Verb meaning.

#### 4.1.4 Object
*   1.  Objects which are provided as a value for this field SHOULD include an "objectType" field. If not specified, the objectType is assumed to be "Activity". Other valid values are: Agent, Group, Sub-Statement or StatementRef. The properties of an Object change according to the objectType,

#### 4.1.4.1 When the ObjectType is Activity
*   1.  moreInfo property - SHOULD resolve to a document human-readable information about the Activity, which MAY include a way to 'launch' the Activity.
*   2.  ObjectType MUST be "Activity" when present. Optional in all cases.
*   3.  An Activity id MUST be unique.
*   4.  An Activity id MUST always reference the same Activity.
*   5.  An Activity id MAY point to metadata or the IRL for the Activity.
*   6.  An Activity with an IRL identifier MAY host metadata using the Activity Definition JSON format which is used in Statements, with a Content-Type of "application/json”.
*   7.  Interaction Activities MUST have a valid interactionType.
*   8.  Interaction Activities SHOULD have the Activity type http://adlnet.gov/exapi/activities/cmi.interaction.
*   9.  Within an array of interaction components, all id values MUST be distinct.
*   10. An interaction component's id value SHOULD NOT have whitespace.

#### 4.1.4.2 When the “Object” is an Agent or a Group
*   1.  Statements that specify an Agent or Group as an Object MUST specify an 'objectType' property.

#### 4.1.4.3 When the “Object” is a Statement
*   1.  A Statement Reference MUST specify an "objectType" property with the value "StatementRef".
*   2.  A Statement Reference MUST set the "id" property to the UUID of a Statement.
*   3.  A Sub-Statement MUST specify an "objectType" property with the value "SubStatement".
*   4.  A Sub-Statement MUST be validated as a Statement in addition to other Sub-Statement requirements.
*   5.  A Sub-Statement MUST NOT have the "id", "stored", "version" or "authority" properties.
*   6.  A Sub-Statement MUST NOT contain a Sub-Statement of their own i.e. cannot be nested.

#### 4.1.5.1 Score
*   1.  The Score Object SHOULD include 'scaled' if a logical percent based score is known.
*   2.  The Score Object SHOULD NOT be used for scores relating to progress or completion. Consider using an extension from an extension profile instead.

#### 4.1.6 Context
*   1.  The revision property MUST NOT be used if the Statement's Object is an Agent or Group.
*   2.  The platform property MUST NOT be used if the Statement's Object is an Agent or Group.
*   3.  The language property MUST NOT be used if not applicable or unknown.
*   4.  The revision property SHOULD be used to track fixes of minor issues (like a spelling error).
*   5.  The revision property SHOULD NOT be used if there is a major change in learning objectives, pedagogy, or assets of an Activity. (Use a new Activity id instead).

#### 4.1.6.2 ContextActivities Property
*   1.  Every key in the contextActivities Object MUST be one of parent, grouping, category, or other.
*   2.  Every value in the contextActivities Object MUST be either a single Activity Object or an array of Activity Objects.
*   3.  There are four valid context types. All, any or none of these MAY be used in a given Statement:
    *   3.1.    Parent: an Activity with a direct relation to the Activity which is the Object of the Statement. In almost all cases there is only one sensible parent or none, not multiple. For example: a Statement about a quiz question would have the quiz as its parent Activity.
    *   3.2.    Grouping: an Activity with an indirect relation to the Activity which is the Object of the Statement. For example: a course that is part of a qualification. The course has several classes. The course relates to a class as the parent, the qualification relates to the class as the grouping.
    *   3.3.    Category: an Activity used to categorize the Statement. "Tags" would be a synonym. Category SHOULD be used to indicate a "profile" of xAPI behaviors, as well as other categorizations. For example: Anna attempts a biology exam, and the Statement is tracked using the CMI-5 profile. The Statement's Activity refers to the exam, and the category is the CMI-5 profile.
    *   3.4.    Other: a context Activity that doesn't fit one of the other fields. For example: Anna studies a textbook for a biology exam. The Statement's Activity refers to the textbook, and the exam is a context Activity of type "other”.

#### 4.1.7 Timestamp
*   1.  A timestamp MUST be formatted according to ISO 8601.
*   2.  A timestamp SHOULD include the timezone.
*   3.  A timestamp SHOULD be the current or a past time when it is outside of a Sub-Statement.
*   4.  A timestamp MAY be truncated or rounded to a precision of at least 3 decimal digits for seconds (millisecond precision MUST be preserved).
*   5.  A timestamp MAY be a moment in the future, to denote a deadline for planned learning, provided it is included inside a Sub-Statement.

#### 4.1.8 Stored
*   1.  The stored property MUST be formatted according to ISO 8601.
*   2.  The stored property SHOULD include the timezone.
*   3.  The stored property SHOULD be the current or a past time
*   4.  The stored property MAY be truncated or rounded to a precision of at least 3 decimal digits for seconds (millisecond precision MUST be preserved).

#### 4.1.9 Authority
*   1.  Authority MUST be an Agent, except in 3-legged OAuth, where it MUST be a Group with two Agents. The two Agents represent an application and user together.
*   2.  The authority MUST contain an Agent Object that represents the OAuth consumer, either by itself, or as part of a group in the case of 3-legged OAuth.
*   3.  The Agent representing the OAuth consumer MUST be identified by account.
*   4.  The Agent representing the OAuth consumer MUST use the consumer key as the “account name” field.
*   5.  If the Agent representing the OAuth consumer is a registered application, the token request endpoint MUST be used as the account homepage.
*   6.  If the Agent representing the OAuth consumer is not a registered application, the temporary credentials endpoint MUST be used as the account homepage.
*   7.  Each unregistered consumer SHOULD use a unique consumer key.

#### 4.1.11 Attachments
*   1.  usageType property - Identifies the usage of this attachment. For example: one expected use case for attachments is to include a "completion certificate". A type IRI corresponding to this usage should be coined, and used with completion certificate attachments.
*   2.  A Statement batch, Statement results, or single Statement that includes attachments MUST satisfy one of the following criteria:
    *   2.1.  It MUST be of type "application/json" and include a fileUrl for every attachment EXCEPT for Statement results when the attachments filter is false.
    *   2.2.  It MUST conform to the definition of multipart/mixed in RFC 1341 and:
*   3.  The first part of the multipart document MUST contain the Statements themselves, with type "application/json".
*   4.  Each additional part contains the raw data for an attachment and forms a logical part of the Statement. This capability will be available when issuing PUT or POST against the Statement resource.
*   5.  MUST include a X-Experience-API-Hash field in each part's header after the first (statements) part.
    *   5.1.    This field MUST be set to match the "sha2" property of the attachment declaration corresponding to the attachment included in this part.
*   6.  MUST include a Content-Transfer-Encoding field with a value of "binary" in each part's header after the first (statements) part.
*   7.  SHOULD only include one copy of an attachment's data when the same attachment is used in multiple Statements that are sent together.
*   8.  SHOULD include a Content-type field in each part's header, for the first part this MUST be "application/json".

#### 4.1.12 Data Constraints
*   1.  Values requiring IRIs MUST be sent with valid IRIs.
*   2.  Keys of language maps MUST be sent with valid RFC 5646 language tags, for similar reasons.

#### 4.3 Voided
*   1.  When issuing a Statement that voids another, the Object of that voiding Statement MUST have the "objectType" field set to "StatementRef".
*   2.  When issuing a Statement that voids another, the Object of that voiding Statement MUST specify the id of the statement-to-be-voided by its "id" field.

#### 4.4 Signed Statements
*   1.  Signed Statements include a JSON web signature (JWS) as an attachment. This allows the original serialization of the Statement to be included along with the signature. For interoperability, the "RSA + SHA" series of JWS algorithms have been selected, and for discoverability of the signer X.509 certificates SHOULD be used.
*   2.  A Signed Statement MUST include a JSON web signature (JWS) as defined here: http://tools.ietf.org/html/draft-ietf-jose-json-web-signature, as an attachment with a usageType of "http://adlnet.gov/expapi/attachments/signature" and a contentType of "application/octet-stream".
*   3.  The JWS signature MUST have a payload of a valid JSON serialization of the Statement generated before the signature was added.
*   4.  The JWS signature MUST use an algorithm of "RS256","RS384", or "RS512".
*   5.  The JWS signature SHOULD have been created based on the private key associated with an X.509 certificate.
*   6.  If X.509 was used to sign, the JWS header SHOULD include the "x5c" property containing the associated certificate chain.

#### 5.2 Language Map
*   1.  A language map is a dictionary where the key is a  RFC 5646 Language Tag, and the value is a string in the language specified in the tag. This map should be populated as fully as possible based on the knowledge of the string in question in different languages

#### 5.3 Extensions
*   1.  Extensions are defined by a map. The keys of that map MUST be IRIs, and the values MAY be any JSON value or data structure.
*   2.  A Statement should not be totally defined by its extensions, and be meaningless otherwise. Experience API Statements should be capturing experiences among Actors and Objects, and SHOULD always strive to map as much information as possible into the built in elements, in order to leverage interoperability among Experience API conformant tools.

