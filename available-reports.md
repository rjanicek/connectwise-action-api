### Available Reports for ConnectWise v2018.6 (58531)
---
#### AccountsReceivableAging
|             |             |     |
|-------------|-------------|-----|
| `Aging` | Numeric | nullable |
| `Aging_Bucket` | Text | nullable |
| `Billing_Terms` | Text | nullable |
| `Billing_Unit_RecID` | Numeric | nullable |
| `Business_Unit_Description` | Text | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric | nullable |
| `Credit_Amount` | Numeric | nullable |
| `Date_Invoice` | DateTime | nullable |
| `DueDate` | DateTime | nullable |
| `Invoice_Amount` | Numeric |  |
| `Invoice_Number` | Text | nullable |
| `IsPaid` | Numeric |  |
| `Location` | Text | nullable |
| `Open_Balance` | Numeric | nullable |
| `Owner_Level_RecID` | Numeric |  |
| `PO_Number` | Text | nullable |
| `Paid_Amount` | Numeric |  |
| `Type` | Text | nullable |

#### Activity
|             |             |     |
|-------------|-------------|-----|
| `Assign_To` | Text |  |
| `Assigned_By` | Text |  |
| `Close_flag` | Boolean |  |
| `Closed_By` | Text | nullable |
| `Company_ID` | Text | nullable |
| `Company_Name` | Text | nullable |
| `Company_Owner_Level_Recid` | Numeric | nullable |
| `Company_RecID` | Numeric | nullable |
| `Contact_RecID` | Numeric |  |
| `Country` | Text | nullable |
| `Date_Closed` | DateTime | nullable |
| `Date_Entered` | DateTime | nullable |
| `Date_Entered_UTC` | DateTime | nullable |
| `Date_Time_End` | DateTime | nullable |
| `Date_Time_Start` | DateTime | nullable |
| `Entered_By` | Text |  |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime | nullable |
| `Marketing_Campaign_RecID` | Numeric |  |
| `Marketing_ID` | Text |  |
| `Notes` | Text | nullable |
| `Notify_Complete_Flag` | Boolean |  |
| `Opportunity_Name` | Text | nullable |
| `Opportunity_Recid` | Numeric | nullable |
| `Owner_ID` | Numeric | nullable |
| `PhoneNbr` | Text | nullable |
| `Reminder_Flag` | Boolean |  |
| `Reminder_Minutes` | Numeric | nullable |
| `Reminder_Time_Desc` | Text | nullable |
| `SO_Activity_Recid` | Numeric |  |
| `SO_Activity_Type_ID` | Text | nullable |
| `SO_Activity_Type_RecID` | Numeric | nullable |
| `SO_Reference_RecID` | Numeric | nullable |
| `SR_Location_RecID` | Numeric | nullable |
| `SR_Service_Recid` | Numeric | nullable |
| `Schedule_RecID` | Numeric |  |
| `Schedule_Type_RecID` | Numeric |  |
| `Sr_Location_Desc` | Text | nullable |
| `State_ID` | Text | nullable |
| `Subject` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Xref_Mbr_RecID` | Numeric | nullable |
| `agr_header_recid` | Numeric | nullable |
| `agr_name` | Text | nullable |
| `closed_flag` | Boolean | nullable |
| `contact_name` | Text | nullable |
| `so_act_status_recid` | Numeric |  |
| `so_activity_type_desc` | Text | nullable |
| `statusdesc` | Text | nullable |

#### ActivityCustomFields
|             |             |     |
|-------------|-------------|-----|
| `Last_Update_UTC` | DateTime |  |
| `Pod_RecID` | Numeric |  |
| `SO_Activity_RecID` | Numeric |  |
| `Subject` | Text | nullable |
| `Updated_By` | Text |  |
| `User_Defined_Field_RecID` | Numeric |  |
| `User_Defined_Field_Value` | Text |  |
| `activity_customfield` | Text |  |
| `activity_fieldtype` | Text | nullable |
| `customfield_podID` | Text |  |

#### ActivityStatus
|             |             |     |
|-------------|-------------|-----|
| `Closed_Flag` | Boolean |  |
| `Default_Flag` | Boolean |  |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `SO_Act_Status_Desc` | Text | nullable |
| `SO_Act_Status_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `spawn_followup_flag` | Boolean | nullable |

#### ActivityType
|             |             |     |
|-------------|-------------|-----|
| `Default_Flag` | Boolean |  |
| `Inactive_Flag` | Boolean | nullable |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime |  |
| `SO_Activity_Type_Desc` | Text | nullable |
| `SO_Activity_Type_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |

#### AgrSite
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric | nullable |
| `AGR_Name` | Text | nullable |
| `AGR_Site_RecID` | Numeric |  |
| `Company_RecID` | Numeric | nullable |
| `Last_Update` | DateTime |  |
| `SiteId` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |

#### AgrType
|             |             |     |
|-------------|-------------|-----|
| `AGR_Default_Flag` | Boolean | nullable |
| `AGR_Detail_Type_ID` | Text | nullable |
| `AGR_Detail_Type_RecID` | Numeric | nullable |
| `AGR_Inactive_Flag` | Boolean | nullable |
| `AGR_Type_Desc` | Text | nullable |
| `AGR_Type_RecID` | Numeric |  |
| `Activity_Class_RecID` | Numeric | nullable |
| `Activity_Type_RecID` | Numeric | nullable |
| `AppCycle_ID` | Text | nullable |
| `BL_InvTemplate_Custom_RecID` | Numeric | nullable |
| `BU_Restrict_Flag` | Boolean | nullable |
| `Bill_Amount` | Numeric | nullable |
| `Bill_Cycle_RecID` | Numeric | nullable |
| `Billing_Terms_RecID` | Numeric | nullable |
| `Billing_Unit_RecID` | Numeric | nullable |
| `BottomComment_Flag` | Boolean | nullable |
| `BusGroup` | Text | nullable |
| `Calc_Flag` | Numeric | nullable |
| `Carryover_Days` | Numeric | nullable |
| `Charge_Firm_Flag` | Boolean | nullable |
| `Comp_Limit_Amount` | Numeric | nullable |
| `Comp_Limit_Option` | Text | nullable |
| `Comp_Rate_Amount` | Numeric | nullable |
| `Comp_Rate_Option` | Text | nullable |
| `Copy_Work_Roles_Flag` | Boolean |  |
| `Copy_Work_Types_Flag` | Boolean |  |
| `CycleBasis_ID` | Text | nullable |
| `EX_Billable_Flag` | Boolean | nullable |
| `EX_InvCust_Flag` | Boolean | nullable |
| `EX_Invoice_Flag` | Boolean | nullable |
| `IV_Billable_Flag` | Boolean | nullable |
| `IV_InvCust_Flag` | Boolean | nullable |
| `IV_Invoice_Flag` | Boolean | nullable |
| `Invoice_Desc` | Text | nullable |
| `Invoice_PreSuf` | Text | nullable |
| `Last_Update` | DateTime |  |
| `OL_Restrict_Flag` | Boolean | nullable |
| `OneTime_Flag` | Boolean | nullable |
| `Overrun_Flag` | Boolean | nullable |
| `Overrun_Limit` | Numeric | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `PM_Type_RecID` | Numeric | nullable |
| `PP_Amount` | Numeric | nullable |
| `PP_Carryover_Flag` | Boolean | nullable |
| `PP_Expenses_Flag` | Boolean | nullable |
| `PP_Expire_Flag` | Boolean | nullable |
| `PP_One_Time_Flag` | Boolean | nullable |
| `PP_Products_Flag` | Boolean | nullable |
| `PP_Tax_Flag` | Boolean | nullable |
| `PP_Time_Flag` | Boolean | nullable |
| `PP_Unlimited_Flag` | Boolean | nullable |
| `PreSuf_Flag` | Boolean | nullable |
| `Prepay_Flag` | Boolean | nullable |
| `Restrict_DP_Flag` | Boolean | nullable |
| `SR_SLA_RecID` | Numeric | nullable |
| `SR_Urgency_RecID` | Numeric | nullable |
| `TE_Amount` | Numeric | nullable |
| `TE_AmtOption` | Numeric | nullable |
| `TE_Billable_Flag` | Boolean | nullable |
| `TE_InvCust_Flag` | Boolean | nullable |
| `TE_Invoice_Flag` | Boolean | nullable |
| `TE_UseAmt_Flag` | Numeric | nullable |
| `TE_UseBill_Flag` | Numeric | nullable |
| `TE_UseRate_Flag` | Numeric | nullable |
| `Taxable_Flag` | Boolean | nullable |
| `Time_Zone` | Text | nullable |
| `TopComment_Flag` | Boolean | nullable |
| `Updated_By` | Text | nullable |
| `bl_invTemplate_recid` | Numeric | nullable |
| `location` | Text | nullable |

#### AgrUnits
|             |             |     |
|-------------|-------------|-----|
| `AGR_Detail_Type_Desc` | Text | nullable |
| `AGR_Detail_Type_ID` | Text | nullable |
| `Restrict_Flag` | Text |  |

#### AgreementAdditions
|             |             |     |
|-------------|-------------|-----|
| `AGR_Name` | Text | nullable |
| `AGR_RecID` | Numeric |  |
| `Addition_RecId` | Numeric |  |
| `Addition_Status` | Text |  |
| `Bill_Customer` | Boolean | nullable |
| `Cancelled_Date` | DateTime | nullable |
| `Effective_Date` | DateTime | nullable |
| `Ext_Cost` | Numeric |  |
| `Ext_Price` | Numeric |  |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Less_Included` | Numeric | nullable |
| `Margin` | Numeric | nullable |
| `Product_Description` | Text | nullable |
| `Product_RecId` | Numeric | nullable |
| `Purchase_Item_Flag` | Boolean |  |
| `QuantityToBill` | Numeric | nullable |
| `Sequence_Number` | Numeric |  |
| `Serial_Number` | Text | nullable |
| `Taxable` | Boolean | nullable |
| `Time_Zone` | Text | nullable |
| `Total_Quantity` | Numeric | nullable |
| `Unit_Cost` | Numeric | nullable |
| `Unit_Price` | Numeric | nullable |
| `Updated_By` | Text | nullable |

#### AgreementAppCycle
|             |             |     |
|-------------|-------------|-----|
| `AGR_AppCycle_RecID` | Numeric |  |
| `AppCycle_ID` | Text | nullable |
| `AppCycle_Name` | Text | nullable |
| `cycle_basis` | Text | nullable |
| `cycle_interval` | Numeric | nullable |

#### AgreementAudit
|             |             |     |
|-------------|-------------|-----|
| `AGR_Audit_RecID` | Numeric |  |
| `AGR_Header_RecID` | Numeric |  |
| `Audit_Source_ID` | Text |  |
| `Audit_Text` | Text | nullable |
| `Audit_Type_ID` | Text |  |
| `Last_Updated_UTC` | DateTime |  |
| `Locale_Text_key` | Text | nullable |
| `Updated_By` | Text | nullable |

#### AgreementInvoice
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric | nullable |
| `AGR_Name` | Text | nullable |
| `Billing_Log_RecID` | Numeric |  |
| `Company_RecID` | Numeric | nullable |
| `Created_By` | Text | nullable |
| `Date_Created` | DateTime | nullable |
| `Date_Invoice` | DateTime | nullable |
| `Invoice_Number` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Run_Date` | DateTime | nullable |
| `Run_Month` | Numeric | nullable |
| `Run_Year` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### AgreementList
|             |             |     |
|-------------|-------------|-----|
| `AGR_Detail_Type_Desc` | Text | nullable |
| `AGR_Header_RecID` | Numeric |  |
| `AGR_Name` | Text | nullable |
| `Agreement_Start_Date` | DateTime | nullable |
| `Agreement_Status` | Text |  |
| `BalAvailable` | Numeric |  |
| `BalRemaining` | Numeric |  |
| `Bill_Start_Date` | DateTime | nullable |
| `Billing_Amount` | Numeric | nullable |
| `Billing_CycleOption_RecID` | Numeric | nullable |
| `Billing_Cycle_Desc` | Text | nullable |
| `Billing_Unit_Name` | Text | nullable |
| `CompanyRecId` | Numeric |  |
| `Company_Name` | Text | nullable |
| `DateEnd` | DateTime | nullable |
| `DateStart` | DateTime | nullable |
| `EX_Billable_Flag` | Boolean |  |
| `EX_Invoice_Flag` | Boolean |  |
| `IV_Billable_Flag` | Boolean |  |
| `IV_Invoice_Flag` | Boolean |  |
| `Last_Update` | DateTime | nullable |
| `Location` | Numeric | nullable |
| `Nbr_Cycles` | Numeric | nullable |
| `Owner_Level_Name` | Text | nullable |
| `PM_Type_RecID` | Numeric |  |
| `Parent_Agreement_Name` | Text | nullable |
| `Parent_Agreement_RecID` | Numeric | nullable |
| `TE_Billable_Flag` | Boolean |  |
| `TE_Invoice_Flag` | Boolean |  |
| `Time_Zone` | Text | nullable |
| `Universal_Formatted_Date_End` | DateTime | nullable |
| `Universal_Formatted_Date_Start` | DateTime | nullable |
| `UnlimitedFlag` | Boolean |  |
| `Updated_By` | Text | nullable |
| `Valid_flag` | Boolean | nullable |
| `agr_type_desc` | Text | nullable |
| `agr_type_recid` | Numeric | nullable |
| `billing_unit_recid` | Numeric | nullable |
| `company_recid` | Numeric |  |
| `owner_level_recid` | Numeric | nullable |

#### Batch
|             |             |     |
|-------------|-------------|-----|
| `Closed_Flag` | Boolean | nullable |
| `Expense_Flag` | Boolean | nullable |
| `GL_BatchID` | Text | nullable |
| `Invoice_Flag` | Boolean | nullable |
| `Last_Update` | DateTime | nullable |
| `Procurement_Flag` | Boolean | nullable |
| `RecID` | Numeric |  |
| `Updated_By` | Text | nullable |

#### BillRateType
|             |             |     |
|-------------|-------------|-----|
| `Description` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Rate_Type_ID` | Text |  |
| `Rate_Type_RecID` | Numeric |  |
| `Sort_Order` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### BillableOptions
|             |             |     |
|-------------|-------------|-----|
| `Billable_Flag` | Boolean | nullable |
| `Billable_Options_RecID` | Numeric |  |
| `Default_Flag` | Boolean | nullable |
| `Expense_Flag` | Boolean | nullable |
| `Include_Nodefault_Flag` | Boolean | nullable |
| `Invoice_Flag` | Boolean | nullable |
| `Option_ID` | Text | nullable |
| `Option_Text` | Text | nullable |
| `Product_Flag` | Boolean | nullable |
| `Time_Flag` | Boolean | nullable |

#### BillingCycle
|             |             |     |
|-------------|-------------|-----|
| `Bill_Cycle_Desc` | Text |  |
| `Bill_Cycle_ID` | Text |  |
| `Bill_Cycle_RecID` | Numeric |  |
| `Cycle_Basis` | Text | nullable |
| `Default_Flag` | Boolean |  |
| `Inactive_Flag` | Numeric | nullable |
| `Last_Update` | DateTime |  |
| `Nbr_Cycles` | Numeric | nullable |
| `Nbr_of_Months` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `cycle_interval` | Numeric | nullable |

#### BillingDelivery
|             |             |     |
|-------------|-------------|-----|
| `Billing_Delivery_RecID` | Numeric |  |
| `Default_Flag` | Boolean |  |
| `Description` | Text | nullable |
| `Email_Flag` | Boolean | nullable |
| `Last_Update` | DateTime | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### BillingSetup
|             |             |     |
|-------------|-------------|-----|
| `Actual_InvTemplate_Setup_RecID` | Numeric | nullable |
| `Agreement_InvTemplate_Setup_RecID` | Numeric | nullable |
| `Ava_Validated_Flag` | Boolean |  |
| `Billing_Setup_RecID` | Numeric |  |
| `Credit_Memo_InvTemplate_Setup_RecID` | Numeric | nullable |
| `Currency_RecID` | Numeric | nullable |
| `Default_InvTemplate_Setup_RecID` | Numeric | nullable |
| `Downpayment_InvTemplate_Setup_RecID` | Numeric | nullable |
| `Email_Template_RecID` | Numeric | nullable |
| `Exclude_Avalara_Flag` | Boolean |  |
| `Expense_Tax_Flag` | Boolean |  |
| `Fixed_Fee_InvTemplate_Setup_RecID` | Numeric | nullable |
| `Invoice_Footer` | Text | nullable |
| `Invoice_PreSuf` | Text | nullable |
| `Invoice_Title` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Misc_InvTemplate_Setup_RecID` | Numeric | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `Payable_Name` | Text | nullable |
| `PreSuf_Flag` | Boolean | nullable |
| `Progress_InvTemplate_Setup_RecID` | Numeric | nullable |
| `Remit_Address_Line1` | Text | nullable |
| `Remit_Address_Line2` | Text | nullable |
| `Remit_City` | Text | nullable |
| `Remit_Country_RecID` | Numeric | nullable |
| `Remit_Name` | Text |  |
| `Remit_Phone` | Text | nullable |
| `Remit_State_ID` | Text | nullable |
| `Remit_Zip` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Top_Comment` | Text | nullable |
| `Updated_By` | Text | nullable |
| `country_recid` | Numeric | nullable |

#### BillingStatus
|             |             |     |
|-------------|-------------|-----|
| `Billing_Status_RecID` | Numeric |  |
| `Closed_Flag` | Boolean |  |
| `Default_Flag` | Boolean |  |
| `Description` | Text | nullable |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime | nullable |
| `Sent_Flag` | Boolean |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### BillingTerms
|             |             |     |
|-------------|-------------|-----|
| `Billing_Terms_RecID` | Numeric |  |
| `Default_Flag` | Boolean |  |
| `Description` | Text | nullable |

#### BillingUnit
|             |             |     |
|-------------|-------------|-----|
| `Billing_Unit_RecID` | Numeric |  |
| `BusGroup` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### BillingUnitLocation
|             |             |     |
|-------------|-------------|-----|
| `Billing_Unit_Loc_RecID` | Numeric |  |
| `Billing_Unit_RecID` | Numeric |  |
| `Description` | Text | nullable |
| `Dispatch` | Numeric | nullable |
| `DutyManager` | Numeric | nullable |
| `Last_Update` | DateTime |  |
| `Member_RecID` | Numeric | nullable |
| `Owner_Level_RecID` | Numeric |  |
| `ServiceManager` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |

#### C_Invoices
|             |             |     |
|-------------|-------------|-----|
| `AgreementType` | Text | nullable |
| `Applied_Amount` | Numeric |  |
| `BillingDelivery` | Text | nullable |
| `BillingType` | Text | nullable |
| `BillingUnit` | Text | nullable |
| `Closed` | Text | nullable |
| `CompanyName` | Text | nullable |
| `DatePaid` | DateTime | nullable |
| `GLBatch` | Text | nullable |
| `GLPosted` | Text |  |
| `InternalNote` | Text | nullable |
| `InvoiceAmount` | Numeric | nullable |
| `InvoiceDate` | DateTime | nullable |
| `InvoiceNumber` | Text | nullable |
| `InvoiceSent` | Boolean | nullable |
| `InvoiceStatus` | Text | nullable |
| `Location` | Text | nullable |
| `ProjectPhase` | Text | nullable |
| `RemitToCompany` | Text | nullable |
| `RoutedTo` | Text | nullable |
| `ServiceTicket` | Numeric | nullable |
| `Territory` | Text | nullable |

#### C_LifeGuarding
|             |             |     |
|-------------|-------------|-----|
| `AgrType` | Text | nullable |
| `CLOSE DATE` | DateTime | nullable |
| `CancelDate` | DateTime | nullable |
| `City` | Text | nullable |
| `Closed Tickets` | Numeric | nullable |
| `Company Name` | Text | nullable |
| `Company Status` | Text | nullable |
| `Company TYPE` | Text |  |
| `Config Name` | Text | nullable |
| `Country` | Text | nullable |
| `Department` | Text | nullable |
| `Division` | Text | nullable |
| `EndDate` | DateTime | nullable |
| `GL License` | Text | nullable |
| `HoursBudget` | Numeric | nullable |
| `Hours_Billable` | Numeric | nullable |
| `Inactive/Terminated DATE` | Text | nullable |
| `Installed DATE` | DateTime | nullable |
| `Inventory License` | Text | nullable |
| `MSP License` | Text | nullable |
| `Mobile Users` | Text | nullable |
| `Model` | Text | nullable |
| `OPEN Tickets` | Numeric | nullable |
| `Partner Advocate Tickets` | Numeric | nullable |
| `Project` | Text | nullable |
| `Project Tickets` | Numeric | nullable |
| `ProjectManager` | Text | nullable |
| `ProjectStatus` | Text | nullable |
| `Purchasing Receiving License` | Text | nullable |
| `Quoteworks` | Text | nullable |
| `Reason` | Text | nullable |
| `STATE` | Text | nullable |
| `Sales Rep` | Text | nullable |
| `Serial Number` | Text | nullable |
| `Spam Stats` | Text | nullable |
| `StartDate` | DateTime | nullable |
| `TagNumber` | Text | nullable |
| `Termination Board Tickets` | Numeric | nullable |
| `Termination Reason` | Text | nullable |
| `Termination Status Tickets` | Numeric | nullable |
| `Total Revenue` | Numeric |  |
| `University Tickets` | Numeric | nullable |
| `Users` | Numeric | nullable |

#### C_PartnerReviewTerminationAndLifeguarding
|             |             |     |
|-------------|-------------|-----|
| `ClosedProjectTickets` | Numeric | nullable |
| `ClosedServiceTickets` | Numeric | nullable |
| `CompanyName` | Text | nullable |
| `CompanyStatus` | Text | nullable |
| `CompanyType` | Text |  |
| `OpenProjectTickets` | Numeric | nullable |
| `OpenServiceTickets` | Numeric | nullable |
| `TotalProjectTickets` | Numeric | nullable |
| `TotalServiceTickets` | Numeric | nullable |
| `TotalTickets` | Numeric | nullable |

#### Calendar
|             |             |     |
|-------------|-------------|-----|
| `Description` | Text |  |
| `Friday_End` | DateTime | nullable |
| `Friday_Start` | DateTime | nullable |
| `Holiday_List_RecID` | Numeric | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Monday_End` | DateTime | nullable |
| `Monday_Start` | DateTime | nullable |
| `Office_Calendar_RecID` | Numeric |  |
| `Saturday_End` | DateTime | nullable |
| `Saturday_Start` | DateTime | nullable |
| `Sunday_End` | DateTime | nullable |
| `Sunday_Start` | DateTime | nullable |
| `Thursday_End` | DateTime | nullable |
| `Thursday_Start` | DateTime | nullable |
| `Time_Zone` | Text | nullable |
| `Tuesday_End` | DateTime | nullable |
| `Tuesday_Start` | DateTime | nullable |
| `Updated_By` | Text |  |
| `Wednesday_End` | DateTime | nullable |
| `Wednesday_Start` | DateTime | nullable |

#### CalendarSetup
|             |             |     |
|-------------|-------------|-----|
| `Adj1End` | DateTime | nullable |
| `Adj1Hours` | Numeric | nullable |
| `Adj1Start` | DateTime | nullable |
| `Adj2End` | DateTime | nullable |
| `Adj2Hours` | Numeric | nullable |
| `Adj2Start` | DateTime | nullable |
| `Adj3End` | DateTime | nullable |
| `Adj3Hours` | Numeric | nullable |
| `Adj3Start` | DateTime | nullable |
| `Calendar_Setup_RecID` | Numeric |  |
| `Last_Update` | DateTime | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_by` | Text | nullable |
| `Week_Start` | Numeric | nullable |

#### CampaignStatus
|             |             |     |
|-------------|-------------|-----|
| `Campaign_Status_RecID` | Numeric |  |
| `Default_Flag` | Boolean |  |
| `Description` | Text |  |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |

#### CampaignSubType
|             |             |     |
|-------------|-------------|-----|
| `Campaign_SubType_RecID` | Numeric |  |
| `Campaign_Type_RecID` | Numeric |  |
| `Description` | Text |  |
| `Last_Update` | DateTime |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |

#### CampaignTracking
|             |             |     |
|-------------|-------------|-----|
| `Clicked_Count` | Numeric | nullable |
| `Contact_RecID` | Numeric | nullable |
| `Date_First_Clicked` | DateTime | nullable |
| `Date_First_Opened` | DateTime | nullable |
| `Date_First_Unknown_Action` | DateTime | nullable |
| `Date_Last_Clicked` | DateTime | nullable |
| `Date_Last_Opened` | DateTime | nullable |
| `Date_Last_Unknown_Action` | DateTime | nullable |
| `Marketing_Campaign_RecID` | Numeric |  |
| `Marketing_Campaign_Tracking_RecID` | Numeric |  |
| `Opened_Count` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Unknown_Action_Count` | Numeric | nullable |

#### CampaignType
|             |             |     |
|-------------|-------------|-----|
| `Campaign_Type_RecID` | Numeric |  |
| `Default_Flag` | Boolean |  |
| `Description` | Text |  |
| `Last_Update` | DateTime |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |

#### ChargeCode
|             |             |     |
|-------------|-------------|-----|
| `Activity_Class_RecID` | Numeric | nullable |
| `Activity_Type_RecID` | Numeric | nullable |
| `Billable_Flag` | Boolean |  |
| `Billing_Unit_RecID` | Numeric | nullable |
| `Company_RecID` | Numeric | nullable |
| `Description` | Text | nullable |
| `EX_Type_Flag` | Boolean |  |
| `Expense_Flag` | Boolean |  |
| `Invoice_Flag` | Boolean | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Owner_Level_RecID` | Numeric | nullable |
| `TE_Charge_Code_RecID` | Numeric |  |
| `Time_Flag` | Boolean |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### CommunicationType
|             |             |     |
|-------------|-------------|-----|
| `Communication_Name` | Text | nullable |
| `Communication_Type_RecID` | Numeric |  |
| `Default_flag` | Boolean |  |
| `Email_Flag` | Boolean |  |
| `Fax_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Phone_Flag` | Boolean |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |

#### Company
|             |             |     |
|-------------|-------------|-----|
| `Account_Nbr` | Text | nullable |
| `Annual_Revenue` | Numeric |  |
| `BL_InvTemplate_Setup_RecID` | Numeric | nullable |
| `Bill_To_Company_Address_RecID` | Numeric | nullable |
| `Bill_To_Company_Name` | Text | nullable |
| `Bill_To_Company_RecID` | Numeric | nullable |
| `Bill_To_Contact_RecID` | Numeric | nullable |
| `Bill_To_Description` | Text | nullable |
| `Bill_To_First_Name` | Text | nullable |
| `Bill_To_Last_Name` | Text | nullable |
| `Billable_Flag` | Numeric | nullable |
| `Billing_Terms_Desc` | Text | nullable |
| `Billing_Terms_RecID` | Numeric | nullable |
| `Company_Calendar` | Text | nullable |
| `Company_ID` | Text | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric |  |
| `Company_Status_Desc` | Text | nullable |
| `Company_Status_RecID` | Numeric | nullable |
| `Company_Type_Desc` | Text | nullable |
| `Company_Type_RecID` | Text | nullable |
| `Contact_RecID` | Numeric | nullable |
| `Currency_Desc` | Text | nullable |
| `Currency_ID` | Text | nullable |
| `Currency_RecID` | Numeric | nullable |
| `Custom_Note` | Text | nullable |
| `Customer_Usage_Type_RecID` | Numeric | nullable |
| `Date_Acquired` | DateTime | nullable |
| `Date_Acquired_UTC` | DateTime | nullable |
| `Date_Entered` | DateTime |  |
| `Date_Entered_UTC` | DateTime |  |
| `Default_Contact_Email` | Text | nullable |
| `Default_Contact_First_Name` | Text | nullable |
| `Default_Contact_Last_Name` | Text | nullable |
| `Delete_Flag` | Boolean |  |
| `Delivery_Method` | Text | nullable |
| `Due_Days` | Numeric | nullable |
| `Email_Cc_Address` | Text | nullable |
| `Email_Cc_Flag` | Boolean |  |
| `Entered_By` | Text |  |
| `IV_Price_Header_RecID` | Numeric | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Lead_Flag` | Boolean |  |
| `Lead_Source` | Text | nullable |
| `Location` | Text | nullable |
| `Market_Desc` | Text | nullable |
| `Market_RecID` | Numeric | nullable |
| `Nbr_Employees` | Numeric | nullable |
| `Office_Calendar_RecID` | Numeric | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `OwnershipType` | Text | nullable |
| `Parent_Company_RecID` | Numeric | nullable |
| `PhoneNbr` | Text | nullable |
| `PhoneNbr_Fax` | Text | nullable |
| `Remit_To_RecID` | Numeric | nullable |
| `Revenue_Year` | Numeric | nullable |
| `SIC_Code_ID` | Text | nullable |
| `Tax_Code_Desc` | Text | nullable |
| `Tax_Code_ID` | Text | nullable |
| `Tax_Code_RecID` | Numeric | nullable |
| `Tax_ID` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Time_Zone_RecID` | Numeric | nullable |
| `Unsubscribe_Flag` | Boolean | nullable |
| `Updated_By` | Text |  |
| `Userfield10_Caption` | Text | nullable |
| `Userfield1_Caption` | Text | nullable |
| `Userfield2_Caption` | Text | nullable |
| `Userfield3_Caption` | Text | nullable |
| `Userfield4_Caption` | Text | nullable |
| `Userfield5_Caption` | Text | nullable |
| `Userfield6_Caption` | Text | nullable |
| `Userfield7_Caption` | Text | nullable |
| `Userfield8_Caption` | Text | nullable |
| `Userfield9_Caption` | Text | nullable |
| `Userfield_1` | Text | nullable |
| `Userfield_10` | Text | nullable |
| `Userfield_2` | Text | nullable |
| `Userfield_3` | Text | nullable |
| `Userfield_4` | Text | nullable |
| `Userfield_5` | Text | nullable |
| `Userfield_6` | Text | nullable |
| `Userfield_7` | Text | nullable |
| `Userfield_8` | Text | nullable |
| `Userfield_9` | Text | nullable |
| `Vendor_Nbr` | Text | nullable |
| `Website_URL` | Text | nullable |

#### CompanyAddress
|             |             |     |
|-------------|-------------|-----|
| `Address_Line1` | Text | nullable |
| `Address_Line2` | Text | nullable |
| `City` | Text | nullable |
| `Company_Address_RecID` | Numeric |  |
| `Company_ID` | Text | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric |  |
| `Country` | Text | nullable |
| `Default_Bill_Flag` | Boolean |  |
| `Default_Flag` | Boolean |  |
| `Default_Mail_Flag` | Boolean |  |
| `Default_Ship_Flag` | Boolean |  |
| `Expense_Reimbursement` | Numeric | nullable |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime |  |
| `PhoneNbr` | Text | nullable |
| `PhoneNbr_Fax` | Text | nullable |
| `Site_Name` | Text | nullable |
| `State_ID` | Text | nullable |
| `Tax_Code_Desc` | Text | nullable |
| `Tax_Code_ID` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Zip` | Text | nullable |

#### CompanyCompanyTypeDescriptions
|             |             |     |
|-------------|-------------|-----|
| `Company_RecID` | Numeric |  |
| `Company_Types` | Text | nullable |

#### CompanyCompanyTypes
|             |             |     |
|-------------|-------------|-----|
| `Company_ID` | Text | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric |  |
| `Company_Type_RecID` | Numeric |  |
| `Description` | Text |  |
| `Service_Alert_Flag` | Boolean |  |
| `Service_Alert_Message` | Text | nullable |

#### CompanyContactCommunication
|             |             |     |
|-------------|-------------|-----|
| `BusinessPhone_Ext` | Text | nullable |
| `Business_Phone` | Text | nullable |
| `Business_Phone_Unformatted` | Text | nullable |
| `Company_Address1` | Text | nullable |
| `Company_Address2` | Text | nullable |
| `Company_City` | Text | nullable |
| `Company_Fax` | Text | nullable |
| `Company_ID` | Text | nullable |
| `Company_Name` | Text | nullable |
| `Company_Phone` | Text | nullable |
| `Company_State` | Text | nullable |
| `Company_Zipcode` | Text | nullable |
| `Contact_First_Name` | Text | nullable |
| `Contact_Last_Name` | Text | nullable |
| `Contact_RecID` | Numeric |  |
| `Date_Anniversary` | DateTime | nullable |
| `Date_Birth` | DateTime | nullable |
| `Email` | Text | nullable |
| `Fax` | Text | nullable |
| `Fax_Ext` | Text | nullable |
| `Fax_Unformatted` | Text | nullable |
| `Gender` | Text | nullable |
| `HomePhone_Ext` | Text | nullable |
| `Home_Phone` | Text | nullable |
| `Home_Phone_Unformatted` | Text | nullable |
| `MobilePhone_Ext` | Text | nullable |
| `Mobile_Phone` | Text | nullable |
| `Mobile_Phone_Unformatted` | Text | nullable |
| `NickName` | Text | nullable |
| `Pager` | Text | nullable |
| `Pager_Ext` | Text | nullable |
| `Pager_Unformatted` | Text | nullable |
| `Reportsto_Name` | Text | nullable |
| `Spouse_Name` | Text | nullable |
| `Title` | Text | nullable |

#### CompanyCustomFields
|             |             |     |
|-------------|-------------|-----|
| `Company_ID` | Text | nullable |
| `Company_RecID` | Numeric |  |
| `Last_Update_UTC` | DateTime |  |
| `Pod_RecID` | Numeric |  |
| `Updated_By` | Text |  |
| `User_Defined_Field_RecID` | Numeric |  |
| `User_Defined_Field_Value` | Text |  |
| `company_customfield` | Text |  |
| `company_fieldtype` | Text | nullable |
| `customfield_podID` | Text |  |

#### CompanyEntityType
|             |             |     |
|-------------|-------------|-----|
| `Description` | Text |  |
| `Entity_Type_RecID` | Numeric |  |

#### CompanyGroup
|             |             |     |
|-------------|-------------|-----|
| `AllContacts_Flag` | Boolean |  |
| `Company_Group_RecID` | Numeric |  |
| `Company_RecID` | Numeric |  |
| `DefaultContact_Flag` | Boolean |  |
| `Group_Type_Desc` | Text | nullable |
| `Group_Type_RecID` | Numeric |  |
| `Last_Update` | DateTime |  |
| `Time_Zone` | Text | nullable |
| `Unsubscribe_Flag` | Boolean | nullable |
| `Updated_By` | Text |  |

#### CompanyMarkets
|             |             |     |
|-------------|-------------|-----|
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric | nullable |
| `Last_Update` | DateTime |  |
| `MarketDescription` | Text | nullable |
| `Market_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### CompanyMgmt
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric | nullable |
| `AGR_Name` | Text | nullable |
| `Company_ID` | Text | nullable |
| `Company_Mgmt_RecID` | Numeric |  |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric |  |
| `Device_Type` | Text | nullable |
| `Group_Guid` | Text | nullable |
| `Group_ID` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Mgmt_It_Setup_RecID` | Numeric | nullable |
| `Mgmt_Setup_Name` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### CompanyProfileUserfields
|             |             |     |
|-------------|-------------|-----|
| `Company_Userfield_1` | Text | nullable |
| `Company_Userfield_10` | Text | nullable |
| `Company_Userfield_2` | Text | nullable |
| `Company_Userfield_3` | Text | nullable |
| `Company_Userfield_4` | Text | nullable |
| `Company_Userfield_5` | Text | nullable |
| `Company_Userfield_6` | Text | nullable |
| `Company_Userfield_7` | Text | nullable |
| `Company_Userfield_8` | Text | nullable |
| `Company_Userfield_9` | Text | nullable |

#### CompanyStateTaxRate
|             |             |     |
|-------------|-------------|-----|
| `Company_ID` | Text | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric |  |
| `State_Rate` | Numeric |  |
| `Tax_Code_RecID` | Numeric | nullable |

#### CompanyStatus
|             |             |     |
|-------------|-------------|-----|
| `Cancel_Track_Flag` | Boolean | nullable |
| `Company_Status_Desc` | Text | nullable |
| `Company_Status_RecID` | Numeric |  |
| `CustomNote_Flag` | Boolean | nullable |
| `Default_Flag` | Boolean |  |
| `Import_Flag` | Boolean |  |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `NoService_Flag` | Boolean | nullable |
| `Notify_Flag` | Boolean | nullable |
| `Notify_Message` | Text | nullable |
| `StandardNote_Flag` | Boolean | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `WF_Track_Header_RecID` | Numeric | nullable |

#### CompanyTeam
|             |             |     |
|-------------|-------------|-----|
| `AcctMgr_Flag` | Boolean |  |
| `Billing_Unit_RecID` | Numeric | nullable |
| `Company_RecID` | Numeric |  |
| `Company_Team_RecID` | Numeric |  |
| `Contact_Recid` | Numeric | nullable |
| `Date_Created_UTC` | DateTime |  |
| `Description` | Numeric | nullable |
| `Entered_By` | Text |  |
| `Last_Update_UTC` | DateTime |  |
| `Member_RecID` | Numeric | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `Sales_Flag` | Boolean |  |
| `Team_Role_Recid` | Numeric | nullable |
| `Tech_Flag` | Boolean |  |
| `Updated_By` | Text |  |

#### CompanyType
|             |             |     |
|-------------|-------------|-----|
| `Company_Type_Desc` | Text |  |
| `Company_Type_RecID` | Numeric |  |
| `Default_Flag` | Boolean |  |
| `Import_Flag` | Boolean |  |
| `Last_Update` | DateTime | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Vendor_Flag` | Boolean |  |

#### CompanyWorkRoles
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric | nullable |
| `AGR_Limit` | Numeric | nullable |
| `Activity_Class_RecID` | Numeric | nullable |
| `BR_Option` | Text | nullable |
| `Billing_Rate_RecID` | Numeric |  |
| `Company_RecID` | Numeric |  |
| `Date_Created_UTC` | DateTime |  |
| `Date_Effective` | DateTime |  |
| `Date_Ending` | DateTime | nullable |
| `Entered_By` | Text |  |
| `Hourly_Rate` | Numeric |  |
| `Last_Update_UTC` | DateTime |  |
| `Owner_Level_RecID` | Numeric | nullable |
| `Rate_Type` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |

#### CompanyWorkTypes
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric | nullable |
| `AGR_Limit` | Numeric |  |
| `Activity_Type_RecID` | Numeric | nullable |
| `Billable_Flag` | Boolean |  |
| `Company_Activity_RecID` | Numeric |  |
| `Company_Address_RecID` | Numeric | nullable |
| `Company_RecID` | Numeric |  |
| `Date_Created_UTC` | DateTime |  |
| `Date_Effective` | DateTime |  |
| `Date_Ending` | DateTime | nullable |
| `Entered_By` | Text |  |
| `Hours_Max` | Numeric | nullable |
| `Hours_Min` | Numeric | nullable |
| `Inactive_Flag` | Boolean |  |
| `Invoice_Flag` | Boolean | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Overage_Rate` | Numeric | nullable |
| `Overage_Rate_Type` | Text | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `Rate` | Numeric |  |
| `Rate_Type` | Text |  |
| `Round_Bill_Hrs` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |

#### ConfigCustomFields
|             |             |     |
|-------------|-------------|-----|
| `Config_Name` | Text | nullable |
| `Config_RecID` | Numeric |  |
| `Last_Update_UTC` | DateTime |  |
| `Pod_RecID` | Numeric |  |
| `Updated_By` | Text |  |
| `User_Defined_Field_RecID` | Numeric |  |
| `User_Defined_Field_Value` | Text |  |
| `config_customfield` | Text |  |
| `config_fieldtype` | Text | nullable |
| `customfield_podID` | Text |  |

#### ConfigStatuses
|             |             |     |
|-------------|-------------|-----|
| `Closed_Flag` | Boolean | nullable |
| `ConfigStatus_Desc` | Text | nullable |
| `Config_Status_Recid` | Numeric |  |
| `Default_Flag` | Boolean | nullable |
| `Last_Update` | DateTime |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ConfigTypes
|             |             |     |
|-------------|-------------|-----|
| `CS_Survey_RecID` | Numeric |  |
| `ConfigType` | Text | nullable |
| `Inactive_Flag` | Boolean | nullable |
| `Instructions` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Portal_Config_RecID` | Numeric | nullable |
| `System_Flag` | Boolean | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### Configs
|             |             |     |
|-------------|-------------|-----|
| `Billing_Unit_RecID` | Numeric | nullable |
| `CS_Survey_RecID` | Numeric |  |
| `ClosedFlag` | Boolean |  |
| `CompanyId` | Text | nullable |
| `CompanyRecId` | Numeric |  |
| `Config_RecID` | Numeric |  |
| `Config_Status_RecID` | Numeric | nullable |
| `ConfigurationName` | Text | nullable |
| `ConfigurationType` | Text | nullable |
| `ConfigurationTypeId` | Numeric |  |
| `ContactName` | Text |  |
| `Contact_RecID` | Numeric | nullable |
| `Country_RecID` | Numeric | nullable |
| `Date_Installed` | DateTime | nullable |
| `Date_Purchased` | DateTime | nullable |
| `Id` | Numeric |  |
| `InstalledBy` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Manufacturer_Name` | Text | nullable |
| `Manufacturer_RecID` | Numeric | nullable |
| `ModelNumber` | Text | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `SLA_Name` | Text | nullable |
| `SR_SLA_RecID` | Numeric | nullable |
| `SR_Service_List` | Text | nullable |
| `SerialNumber` | Text | nullable |
| `Status` | Text | nullable |
| `StatusId` | Numeric | nullable |
| `TagNumber` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Universal_Formatted_Warranty_Expiration` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Vendor` | Text | nullable |
| `Vendor_Nbr` | Text | nullable |
| `Vendor_Notes` | Text | nullable |
| `Vendor_RecId` | Numeric | nullable |
| `WarrantyExpiration` | DateTime | nullable |
| `address_line1` | Text | nullable |
| `address_line2` | Text | nullable |
| `city` | Text | nullable |
| `company_address_recid` | Numeric | nullable |
| `company_name` | Text | nullable |
| `state_id` | Text | nullable |
| `zip` | Text | nullable |

#### Configuration
|             |             |     |
|-------------|-------------|-----|
| `Address_line1` | Text |  |
| `Address_line2` | Text |  |
| `Answer` | Text |  |
| `Billing_Unit_RecID` | Numeric | nullable |
| `BusinessGrp` | Text |  |
| `CS_Survey_RecID` | Numeric |  |
| `City` | Text |  |
| `Company_Name` | Text |  |
| `Company_RecID` | Numeric |  |
| `ConfigStatus` | Text |  |
| `Config_Name` | Text | nullable |
| `Config_RecID` | Numeric |  |
| `Config_Type` | Text | nullable |
| `Contact_Name` | Text |  |
| `Contact_RecID` | Numeric | nullable |
| `Date_Expiration` | DateTime | nullable |
| `Date_Installed` | DateTime | nullable |
| `Date_Purchased` | DateTime | nullable |
| `DeviceID` | Text |  |
| `InstalledBy` | Text |  |
| `LastLogin` | Text |  |
| `Last_Update` | DateTime | nullable |
| `Location` | Text |  |
| `Manufacturer` | Text |  |
| `MgmtLink` | Text |  |
| `Model_Number` | Text |  |
| `Notes` | Text |  |
| `Owner_Level_RecID` | Numeric | nullable |
| `PostalCode` | Text |  |
| `Question` | Text | nullable |
| `Seq_Nbr` | Numeric | nullable |
| `Serial_Number` | Text |  |
| `State` | Text |  |
| `Tag_Number` | Text |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ConfigurationAgreement
|             |             |     |
|-------------|-------------|-----|
| `AgrTypeRecId` | Numeric | nullable |
| `AgreementName` | Text | nullable |
| `AgreementRecId` | Numeric |  |
| `AgreementType` | Text | nullable |
| `CompanyId` | Text | nullable |
| `CompanyName` | Text | nullable |
| `CompanyRecId` | Numeric | nullable |
| `ConfigurationName` | Text | nullable |
| `ConfigurationRecId` | Numeric | nullable |
| `ConfigurationType` | Text | nullable |
| `ConfigurationTypeRecId` | Numeric | nullable |
| `Last_Update` | DateTime |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ConfigurationType
|             |             |     |
|-------------|-------------|-----|
| `Inactive_Flag` | Boolean | nullable |
| `Instructions` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Name` | Text | nullable |
| `RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ConfigurationTypeQuestion
|             |             |     |
|-------------|-------------|-----|
| `CS_Survey_Detail_RecID` | Numeric |  |
| `CS_Survey_RecID` | Numeric |  |
| `Entry_Type` | Text | nullable |
| `Field_Type` | Text | nullable |
| `Inactive_Flag` | Boolean | nullable |
| `Last_Update` | DateTime | nullable |
| `Nbr_Decimals` | Numeric | nullable |
| `Question` | Text | nullable |
| `Required_Flag` | Boolean | nullable |
| `Seq_Nbr` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ConnectWiseHostedApiScreen
|             |             |     |
|-------------|-------------|-----|
| `Client_Api_ID` | Text |  |
| `Presenter_Identifier_Client_Api_RecID` | Numeric |  |

#### Contact
|             |             |     |
|-------------|-------------|-----|
| `Address_Line1` | Text | nullable |
| `Address_Line2` | Text | nullable |
| `Children_Flag` | Boolean |  |
| `Children_Info` | Text | nullable |
| `City` | Text | nullable |
| `Company_Address_RecID` | Numeric | nullable |
| `Company_ID` | Text | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric | nullable |
| `Contact_RecID` | Numeric |  |
| `Contact_Type_Desc` | Text | nullable |
| `Contact_Type_RecID` | Text | nullable |
| `Country` | Text | nullable |
| `Date_Anniversary` | DateTime | nullable |
| `Date_Birth` | DateTime | nullable |
| `Default_Billing_Flag` | Boolean |  |
| `Default_Email` | Text |  |
| `Default_Flag` | Boolean | nullable |
| `Default_Phone` | Text |  |
| `Delete_Flag` | Numeric | nullable |
| `Department` | Text | nullable |
| `First_Name` | Text | nullable |
| `Gender` | Text | nullable |
| `Hobbies` | Text | nullable |
| `Image_Link` | Text | nullable |
| `Inactive_Flag` | Boolean | nullable |
| `Last_Name` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Married_Flag` | Boolean |  |
| `NickName` | Text | nullable |
| `Personal_Address_Flag` | Boolean |  |
| `Portal_Disable_Flag` | Boolean | nullable |
| `Portal_PW` | Numeric | nullable |
| `Portal_Security_Level` | Numeric | nullable |
| `School` | Text | nullable |
| `Spouse_Name` | Text | nullable |
| `State_ID` | Text | nullable |
| `Territory` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Title` | Text | nullable |
| `Unsubscribe_Flag` | Boolean |  |
| `Updated_By` | Text | nullable |
| `Userfield1` | Text | nullable |
| `Userfield10` | Text | nullable |
| `Userfield10_Caption` | Text | nullable |
| `Userfield1_Caption` | Text | nullable |
| `Userfield2` | Text | nullable |
| `Userfield2_Caption` | Text | nullable |
| `Userfield3` | Text | nullable |
| `Userfield3_Caption` | Text | nullable |
| `Userfield4` | Text | nullable |
| `Userfield4_Caption` | Text | nullable |
| `Userfield5` | Text | nullable |
| `Userfield5_Caption` | Text | nullable |
| `Userfield6` | Text | nullable |
| `Userfield6_Caption` | Text | nullable |
| `Userfield7` | Text | nullable |
| `Userfield7_Caption` | Text | nullable |
| `Userfield8` | Text | nullable |
| `Userfield8_Caption` | Text | nullable |
| `Userfield9` | Text | nullable |
| `Userfield9_Caption` | Text | nullable |
| `Zip` | Text | nullable |

#### ContactCommunication
|             |             |     |
|-------------|-------------|-----|
| `Communication_Name` | Text | nullable |
| `Communication_Type_RecID` | Numeric |  |
| `Contact_Communication_Desc` | Text | nullable |
| `Contact_Communication_RecID` | Numeric |  |
| `Contact_RecID` | Numeric |  |
| `Default_Flag` | Boolean |  |
| `Extension` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ContactContactTypeDescriptions
|             |             |     |
|-------------|-------------|-----|
| `Contact_RecID` | Numeric |  |
| `Contact_Types` | Text | nullable |

#### ContactContactTypes
|             |             |     |
|-------------|-------------|-----|
| `Contact_RecID` | Numeric |  |
| `Contact_Type_RecID` | Numeric |  |
| `Description` | Text | nullable |
| `First_Name` | Text | nullable |
| `Last_Name` | Text | nullable |
| `Service_Alert_Flag` | Boolean |  |
| `Service_Alert_Message` | Text | nullable |

#### ContactCustomFields
|             |             |     |
|-------------|-------------|-----|
| `Contact_RecID` | Numeric |  |
| `First_Name` | Text | nullable |
| `Last_Name` | Text | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Pod_RecID` | Numeric |  |
| `Updated_By` | Text |  |
| `User_Defined_Field_RecID` | Numeric |  |
| `User_Defined_Field_Value` | Text |  |
| `contact_customfield` | Text |  |
| `contact_fieldtype` | Text | nullable |
| `customfield_podID` | Text |  |

#### ContactGroup
|             |             |     |
|-------------|-------------|-----|
| `Company_RecID` | Numeric | nullable |
| `Contact_Group_RecID` | Numeric |  |
| `Contact_RecID` | Numeric | nullable |
| `Group_Type_Desc` | Text | nullable |
| `Group_Type_RecID` | Numeric | nullable |
| `Inactive_Flag` | Boolean | nullable |
| `Last_Update` | DateTime | nullable |
| `Public_Description` | Text | nullable |
| `Public_Flag` | Boolean | nullable |
| `Time_Zone` | Text | nullable |
| `Unsubscribe_Flag` | Boolean | nullable |
| `Updated_By` | Text | nullable |

#### ContactName
|             |             |     |
|-------------|-------------|-----|
| `Contact_RecID` | Numeric |  |
| `First_Name` | Text |  |
| `Last_Name` | Text |  |
| `Last_Update` | DateTime |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ContactPresence
|             |             |     |
|-------------|-------------|-----|
| `Contact_Presence_RecID` | Numeric |  |
| `Contact_Presence_Type_RecID` | Numeric |  |
| `Contact_RecID` | Numeric |  |
| `Last_Update_UTC` | DateTime | nullable |
| `Time_Zone` | Text |  |
| `Updated_By` | Text | nullable |

#### ContactRelationship
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime |  |
| `Relationship` | Text | nullable |
| `Relationship_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ContactType
|             |             |     |
|-------------|-------------|-----|
| `Contact_Type_ID` | Text |  |
| `Contact_Type_RecID` | Numeric |  |
| `Default_Flag` | Boolean |  |
| `Description` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### Contacts
|             |             |     |
|-------------|-------------|-----|
| `Address1` | Text | nullable |
| `Address2` | Text | nullable |
| `Caption` | Text | nullable |
| `City` | Text | nullable |
| `CompanyRecID` | Numeric | nullable |
| `Company_Name` | Text | nullable |
| `Contact_RecID` | Numeric |  |
| `Country` | Text | nullable |
| `Default_Flag` | Boolean | nullable |
| `DisablePortalLogin` | Boolean |  |
| `Email` | Text | nullable |
| `First_Name` | Text | nullable |
| `Last_Name` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Phone` | Text | nullable |
| `Portal_Security_Level` | Numeric | nullable |
| `Relationship` | Text | nullable |
| `State` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Type` | Text | nullable |
| `Universal_Formatted_Last_Update` | DateTime | nullable |
| `Updated_By` | Text | nullable |
| `Zip` | Text | nullable |

#### ConversionHistory
|             |             |     |
|-------------|-------------|-----|
| `Conversion_History_RecID` | Numeric |  |
| `Conversion_Type_ID` | Text |  |
| `Converstion_Type_Desc` | Text |  |
| `Converted_To_RecID` | Numeric |  |
| `Date_Created_UTC` | DateTime |  |
| `Entered_By` | Text |  |
| `Parent_RecID` | Numeric |  |
| `Parent_Type_Desc` | Text |  |
| `Parent_Type_ID` | Text |  |

#### Countries
|             |             |     |
|-------------|-------------|-----|
| `City_Caption` | Text | nullable |
| `Country` | Text |  |
| `Country_Code` | Text | nullable |
| `Country_RecID` | Numeric |  |
| `Currency_ID` | Text | nullable |
| `Default_Flag` | Boolean |  |
| `Last_Update` | DateTime | nullable |
| `State_Caption` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Zip_Caption` | Text | nullable |

#### Currency
|             |             |     |
|-------------|-------------|-----|
| `Currency_ID` | Text |  |
| `Currency_RecID` | Numeric |  |
| `Currency_Symbol` | Text | nullable |
| `Description` | Text | nullable |
| `DisplayID_Flag` | Boolean | nullable |
| `DisplaySymbol_Flag` | Boolean |  |
| `Iso_Code` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### CustomCaption
|             |             |     |
|-------------|-------------|-----|
| `Caption` | Text | nullable |
| `Field_Name` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### CustomFields
|             |             |     |
|-------------|-------------|-----|
| `Required_Flag` | Boolean |  |
| `User_Defined_Field_RecID` | Numeric |  |
| `billing_unit_recids` | Text | nullable |
| `customfield_caption` | Text |  |
| `customfield_description` | Text | nullable |
| `customfield_nbrdecimals` | Numeric | nullable |
| `customfield_podID` | Text |  |
| `customfield_recid` | Numeric |  |
| `customfield_screenID` | Text |  |
| `customfield_type` | Text | nullable |
| `owner_level_recids` | Text | nullable |

#### CustomFieldsOptions
|             |             |     |
|-------------|-------------|-----|
| `Default_Flag` | Boolean |  |
| `Inactive_Flag` | Boolean |  |
| `customfield_caption` | Text |  |
| `customfield_option_recid` | Numeric |  |
| `customfield_recid` | Numeric |  |
| `option_value` | Text |  |

#### Department
|             |             |     |
|-------------|-------------|-----|
| `Department_Name` | Text | nullable |
| `Department_RecID` | Numeric |  |
| `Last_Update` | DateTime | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### Document
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric | nullable |
| `Company_RecID` | Numeric | nullable |
| `Config_RecID` | Numeric | nullable |
| `Contact_RecID` | Numeric | nullable |
| `DM_Document_RecID` | Numeric |  |
| `DM_Relationship_RecID` | Numeric |  |
| `EX_Detail_RecID` | Numeric | nullable |
| `Filename` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Link_Flag` | Boolean | nullable |
| `Opportunity_RecID` | Numeric | nullable |
| `Order_Header_RecID` | Numeric | nullable |
| `PM_Project_RecID` | Numeric | nullable |
| `Path` | Text | nullable |
| `Public_Flag` | Boolean |  |
| `Purchase_Header_RecID` | Numeric | nullable |
| `RMA_Tag_RecID` | Numeric | nullable |
| `SRT_Service_RecID` | Numeric | nullable |
| `SR_Service_RecID` | Numeric | nullable |
| `ServerFilename` | Text | nullable |
| `Template_Flag` | Boolean |  |
| `Time_RecID` | Numeric | nullable |
| `Title` | Text | nullable |
| `Updated_By` | Text | nullable |

#### Expense
|             |             |     |
|-------------|-------------|-----|
| `AgrAmtCovered` | Numeric |  |
| `Agreement` | Text | nullable |
| `Billable_Amt` | Numeric | nullable |
| `Billable_Flag` | Boolean |  |
| `Billing_Log_RecID` | Numeric | nullable |
| `BusGroup` | Text | nullable |
| `Charge_Code` | Text | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric | nullable |
| `Date_Expense` | DateTime | nullable |
| `Date_Invoice` | DateTime | nullable |
| `EX_Detail_RecID` | Numeric |  |
| `Expense_Cost` | Numeric | nullable |
| `First_Name` | Text | nullable |
| `Invoice_Flag` | Boolean | nullable |
| `Invoice_Number` | Text | nullable |
| `Last_Login_UTC` | DateTime | nullable |
| `Last_Name` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Location` | Text | nullable |
| `Member_ID` | Text |  |
| `Member_RecID` | Numeric |  |
| `NonBillable_Amt` | Numeric | nullable |
| `Option_ID` | Text | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `PM_Phase_RecID` | Numeric | nullable |
| `PM_Project_RecID` | Numeric | nullable |
| `Payment_Method` | Text | nullable |
| `Project_Phase` | Text | nullable |
| `Reason` | Text | nullable |
| `Reimb_Amount` | Numeric | nullable |
| `Reimb_Desc` | Text | nullable |
| `SR_Service_RecID` | Numeric | nullable |
| `TE_Status_ID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `charge_to` | Text | nullable |
| `expense_type` | Text | nullable |
| `project_name` | Text | nullable |
| `sr_status` | Text | nullable |
| `sr_summary` | Text | nullable |
| `te_charge_code_recid` | Numeric | nullable |
| `territory` | Text | nullable |
| `time_status` | Text | nullable |

#### ExpenseClassification
|             |             |     |
|-------------|-------------|-----|
| `Company_Flag` | Boolean |  |
| `Default_Flag` | Boolean |  |
| `Description` | Text | nullable |
| `EX_Class_RecID` | Numeric |  |
| `Employee_Flag` | Boolean |  |
| `Multiplier` | Numeric | nullable |

#### ExpenseCustomFields
|             |             |     |
|-------------|-------------|-----|
| `EX_Detail_RecID` | Numeric |  |
| `EX_Header_RecID` | Numeric |  |
| `Last_Update_UTC` | DateTime |  |
| `Pod_RecID` | Numeric |  |
| `Updated_By` | Text |  |
| `User_Defined_Field_RecID` | Numeric |  |
| `User_Defined_Field_Value` | Text |  |
| `customfield_podID` | Text |  |
| `expense_customfield` | Text |  |
| `expense_fieldtype` | Text | nullable |

#### ExpensePaymentMethod
|             |             |     |
|-------------|-------------|-----|
| `Company_Flag` | Boolean |  |
| `Default_Flag` | Boolean |  |
| `Description` | Text | nullable |
| `EX_Class_RecID` | Numeric | nullable |
| `EX_Payment_RecID` | Numeric |  |
| `Last_Update` | DateTime | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ExpenseReports
|             |             |     |
|-------------|-------------|-----|
| `Date_DeadLine` | DateTime |  |
| `Date_End` | DateTime |  |
| `Date_Start` | DateTime |  |
| `Description` | Text | nullable |
| `Last_Updated_UTC` | DateTime |  |
| `Member_ID` | Text |  |
| `Member_RecID` | Numeric |  |
| `Period` | Numeric |  |
| `TE_Period_RecID` | Numeric |  |
| `TE_Status_ID` | Numeric | nullable |

#### ExpenseTax
|             |             |     |
|-------------|-------------|-----|
| `EX_Detail_RecID` | Numeric |  |
| `EX_Detail_Tax_RecID` | Numeric |  |
| `EX_Tax_Type_Desc` | Text | nullable |
| `EX_Tax_Type_RecID` | Numeric |  |
| `Last_Update_UTC` | DateTime |  |
| `Tax_Amount` | Numeric | nullable |
| `Updated_By` | Text |  |

#### ExpenseTaxType
|             |             |     |
|-------------|-------------|-----|
| `EX_Tax_Type_Desc` | Text | nullable |
| `EX_Tax_Type_RecID` | Numeric |  |
| `Inactive_Flag` | Boolean |  |
| `Last_Update_UTC` | DateTime |  |
| `Updated_By` | Text |  |

#### ExpenseType
|             |             |     |
|-------------|-------------|-----|
| `Advance_Flag` | Boolean |  |
| `Amount_Caption` | Text | nullable |
| `Billable_Flag` | Boolean | nullable |
| `Description` | Text |  |
| `EX_Type_RecID` | Numeric |  |
| `Inactive_Flag` | Boolean | nullable |
| `Invoice_Flag` | Boolean | nullable |
| `Last_Update` | DateTime | nullable |
| `Markup_Amount` | Numeric | nullable |
| `Markup_Option` | Text | nullable |
| `Max_Amount` | Numeric |  |
| `Mileage_Flag` | Boolean |  |
| `Quantity_Flag` | Boolean |  |
| `Reimbursement_Rate` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### GroupType
|             |             |     |
|-------------|-------------|-----|
| `Company_Flag` | Boolean |  |
| `Company_Group_Name` | Text | nullable |
| `Contact_Flag` | Boolean |  |
| `Group_Type_RecID` | Numeric |  |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Public_Description` | Text | nullable |
| `Public_Flag` | Boolean |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |

#### Holiday
|             |             |     |
|-------------|-------------|-----|
| `Description` | Text |  |
| `Holiday_Date` | DateTime |  |
| `Holiday_List_Name` | Text |  |
| `Holiday_List_RecID` | Numeric |  |
| `Last_Update_UTC` | DateTime |  |
| `Time_End` | DateTime | nullable |
| `Time_Start` | DateTime | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |

#### IVCategory
|             |             |     |
|-------------|-------------|-----|
| `IV_Cat_Desc` | Text | nullable |
| `IV_Cat_RecID` | Numeric |  |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### IVClass
|             |             |     |
|-------------|-------------|-----|
| `IV_Class_Desc` | Text | nullable |
| `IV_Class_ID` | Text |  |

#### IVPriceAttribute
|             |             |     |
|-------------|-------------|-----|
| `Default_Flag` | Boolean |  |
| `Description` | Text |  |
| `IV_Price_Attribute_ID` | Text |  |
| `IV_Price_Attribute_RecID` | Numeric |  |

#### IVProductBundle
|             |             |     |
|-------------|-------------|-----|
| `Hide_Description_Flag` | Boolean |  |
| `Hide_Item_ID_Flag` | Boolean |  |
| `Hide_Price_Flag` | Boolean |  |
| `Hide_Quantity_Flag` | Boolean |  |
| `IV_Product_Bundle_RecID` | Numeric |  |
| `IV_Product_RecID` | Numeric |  |
| `Last_Update` | DateTime |  |
| `Parent_Item_RecID` | Numeric | nullable |
| `Parent_RecID` | Numeric | nullable |
| `Quantity` | Numeric |  |
| `Sequence_Number` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |

#### IVSubCategory
|             |             |     |
|-------------|-------------|-----|
| `IV_Cat_RecID` | Numeric | nullable |
| `IV_SubCat_Desc` | Text | nullable |
| `IV_SubCat_RecID` | Numeric |  |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### IVType
|             |             |     |
|-------------|-------------|-----|
| `IV_Type_Desc` | Text | nullable |
| `IV_Type_RecID` | Numeric |  |
| `Inactive_Flag` | Boolean |  |
| `Item_Type_Xref` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### IVUom
|             |             |     |
|-------------|-------------|-----|
| `Default_Flag` | Boolean |  |
| `IV_UOM_RecID` | Numeric |  |
| `IV_Uom_Desc` | Text | nullable |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### InventoryBalance
|             |             |     |
|-------------|-------------|-----|
| `inv_type` | Text |  |
| `total` | Numeric | nullable |
| `val_date` | DateTime | nullable |

#### InventoryBalanceWithShippedNotInvoiced
|             |             |     |
|-------------|-------------|-----|
| `billing_log_recid` | Numeric |  |
| `date_created` | DateTime | nullable |
| `inv_type` | Text |  |
| `total` | Numeric | nullable |
| `val_date` | DateTime | nullable |

#### InventoryItem
|             |             |     |
|-------------|-------------|-----|
| `Alt_Item_ID` | Numeric | nullable |
| `Average_Value` | Numeric | nullable |
| `Calc_Cost_Flag` | Boolean |  |
| `Calc_Price_Flag` | Boolean |  |
| `Current_Cost` | Numeric | nullable |
| `Date_Entered_UTC` | DateTime |  |
| `Description` | Text | nullable |
| `IV_Class_ID` | Text | nullable |
| `IV_Item_RecID` | Numeric |  |
| `IV_Price_Attribute_ID` | Text | nullable |
| `IV_SubCat_RecID` | Numeric | nullable |
| `IV_Type_RecID` | Numeric | nullable |
| `IV_UOM_RecID` | Numeric | nullable |
| `Inactive_Flag` | Boolean |  |
| `Item_ID` | Text | nullable |
| `Last_Update` | DateTime |  |
| `List_Price` | Numeric |  |
| `Long_Description` | Text | nullable |
| `Manufacturer_RecID` | Numeric | nullable |
| `Max_SO_Qty` | Numeric | nullable |
| `Mfg_Item_ID` | Text | nullable |
| `Min_SO_Qty` | Numeric | nullable |
| `Minimum_Stock` | Numeric | nullable |
| `Notes` | Text | nullable |
| `Phase_Product_Flag` | Boolean |  |
| `SerializedCost_Flag` | Boolean |  |
| `Serialized_Flag` | Boolean | nullable |
| `Short_Name` | Numeric | nullable |
| `Std_Cost` | Numeric | nullable |
| `Taxable_Flag` | Boolean |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Vendor_RecID` | Numeric | nullable |
| `Vendor_SKU` | Text | nullable |

#### InventoryMovement
|             |             |     |
|-------------|-------------|-----|
| `Credit` | Numeric | nullable |
| `Customer` | Text | nullable |
| `Date` | DateTime | nullable |
| `Debit` | Numeric | nullable |
| `Description` | Text | nullable |
| `ProductId` | Text | nullable |
| `Quantity` | Numeric | nullable |
| `Ref` | Text | nullable |
| `Type` | Text |  |

#### InvoiceAgreementAdditions
|             |             |     |
|-------------|-------------|-----|
| `AGR_Amount` | Numeric | nullable |
| `AGR_Header_RecID` | Numeric |  |
| `AGR_Name` | Text | nullable |
| `Billing_Log_RecID` | Numeric |  |
| `Currency_RecID` | Numeric |  |
| `Currency_Symbol` | Text | nullable |
| `DisplaySymbol_Flag` | Boolean |  |
| `Extended_Price` | Numeric | nullable |
| `IV_Item_RecID` | Numeric | nullable |
| `Invoice_Number` | Text | nullable |
| `IsParent` | Numeric |  |
| `Item_ID` | Text | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Line_Desc` | Text | nullable |
| `Quantity` | Numeric | nullable |
| `Sequence_Number` | Numeric | nullable |
| `Serial_Number` | Text | nullable |
| `Taxable_Flag` | Boolean | nullable |
| `Type` | Text |  |
| `Unit_Price` | Numeric | nullable |

#### InvoiceCustomFields
|             |             |     |
|-------------|-------------|-----|
| `Billing_Log_RecID` | Numeric |  |
| `Invoice_Number` | Text | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Pod_RecID` | Numeric |  |
| `Updated_By` | Text |  |
| `User_Defined_Field_RecID` | Numeric |  |
| `User_Defined_Field_Value` | Text |  |
| `customfield_podID` | Text |  |
| `invoice_customfield` | Text |  |
| `invoice_fieldtype` | Text | nullable |

#### InvoiceEmailTemplate
|             |             |     |
|-------------|-------------|-----|
| `Billing_Status_RecID` | Numeric | nullable |
| `Default_Flag` | Boolean | nullable |
| `Email_Template_RecID` | Numeric |  |
| `Last_Update` | DateTime | nullable |
| `Subject` | Text | nullable |
| `Template_Name` | Text | nullable |
| `TimeZone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### InvoiceExpense
|             |             |     |
|-------------|-------------|-----|
| `Agreement` | Text | nullable |
| `Agreement_Amount_Covered` | Numeric |  |
| `Billing_Log_RecID` | Numeric | nullable |
| `Charge_To` | Text | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric | nullable |
| `Currency_RecID` | Numeric |  |
| `Currency_Symbol` | Text | nullable |
| `Date_Expense` | DateTime | nullable |
| `DisplaySymbol_Flag` | Boolean |  |
| `EX_Detail_RecID` | Numeric |  |
| `Expense_Cost` | Numeric | nullable |
| `Expense_Type` | Text | nullable |
| `Extended_Amount` | Numeric | nullable |
| `First_Name` | Text | nullable |
| `Invoice_Number` | Text | nullable |
| `Last_Name` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Member_ID` | Text |  |
| `Member_RecID` | Numeric |  |
| `Option_ID` | Text | nullable |
| `PM_Phase_RecID` | Numeric | nullable |
| `PM_Project_RecID` | Numeric | nullable |
| `Project_Name` | Text | nullable |
| `Project_Phase` | Text | nullable |
| `Reason` | Text | nullable |
| `SR_Service_RecID` | Numeric | nullable |
| `SR_Summary` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### InvoiceHeader
|             |             |     |
|-------------|-------------|-----|
| `AGR_Amount` | Numeric | nullable |
| `AGR_Header_RecID` | Numeric |  |
| `AGR_Hours` | Numeric | nullable |
| `Account` | Text | nullable |
| `Address_Line1` | Text | nullable |
| `Address_Line2` | Text | nullable |
| `Adj_Amount` | Numeric | nullable |
| `Adj_By` | Text | nullable |
| `Adj_Reason` | Text | nullable |
| `Agr_Adjustment` | Numeric | nullable |
| `Agreement_Name` | Text | nullable |
| `Apply_To` | Text | nullable |
| `Attention` | Text | nullable |
| `Bill_To_Address_Line1` | Text | nullable |
| `Bill_To_Address_Line2` | Text | nullable |
| `Bill_To_City` | Text | nullable |
| `Bill_To_Country` | Text | nullable |
| `Bill_To_Name` | Text | nullable |
| `Bill_To_PhoneNbr` | Text | nullable |
| `Bill_To_RecID` | Numeric |  |
| `Bill_To_State_ID` | Text | nullable |
| `Bill_To_Zip` | Text | nullable |
| `Bill_to_Address_RecID` | Numeric |  |
| `Billing_Contact_Name` | Text |  |
| `Billing_Log_RecID` | Numeric |  |
| `Billing_Method` | Text | nullable |
| `Billing_Status_RecID` | Numeric |  |
| `Billing_Terms` | Text | nullable |
| `Billing_Terms_RecID` | Numeric |  |
| `Billing_Type_Desc` | Text | nullable |
| `Billing_Type_ID` | Text |  |
| `Billing_Unit_RecID` | Numeric |  |
| `Bottom_Comment` | Text | nullable |
| `BusGroup` | Text | nullable |
| `City` | Text | nullable |
| `Closed_Flag` | Boolean |  |
| `Company_Address_RecID` | Numeric |  |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric |  |
| `Country` | Text | nullable |
| `Credit_Amount` | Numeric | nullable |
| `Currency_RecID` | Numeric |  |
| `Currency_Symbol` | Text | nullable |
| `Date_Closed` | DateTime | nullable |
| `Date_Created` | DateTime | nullable |
| `Date_Invoice` | DateTime | nullable |
| `Date_Paid` | DateTime | nullable |
| `Date_Processing` | DateTime | nullable |
| `DisplaySymbol_Flag` | Boolean |  |
| `DownPayment` | Numeric |  |
| `Due_Date` | DateTime | nullable |
| `Expense_Amount` | Numeric | nullable |
| `Internal_Note` | Text | nullable |
| `Invoice_Amount` | Numeric |  |
| `Invoice_Footer` | Text | nullable |
| `Invoice_Number` | Text | nullable |
| `Invoice_Subtotal` | Numeric | nullable |
| `Invoice_Type` | Text |  |
| `Last_Update` | DateTime | nullable |
| `Location` | Text | nullable |
| `Misc_Amount` | Numeric | nullable |
| `Owner_Level_RecID` | Numeric |  |
| `PM_Phase_RecID` | Numeric |  |
| `PM_Project_RecID` | Numeric |  |
| `PO_Number` | Text | nullable |
| `Paid_Amount` | Numeric |  |
| `Paid_Flag` | Numeric |  |
| `Payable_Name` | Text | nullable |
| `Phase_ID` | Text | nullable |
| `PhoneNbr` | Text | nullable |
| `Processing_Flag` | Boolean |  |
| `Progress_Amount_Applied` | Numeric | nullable |
| `Project_ID` | Text | nullable |
| `Reference` | Text | nullable |
| `Rem_Downpayment` | Numeric | nullable |
| `Remit_To_Address_Line1` | Text | nullable |
| `Remit_To_Address_Line2` | Text | nullable |
| `Remit_To_City` | Text | nullable |
| `Remit_To_Country` | Text | nullable |
| `Remit_To_Name` | Text |  |
| `Remit_To_PhoneNbr` | Text | nullable |
| `Remit_To_State_ID` | Text | nullable |
| `Remit_To_Zip` | Text | nullable |
| `SalesOrderNbr` | Numeric |  |
| `Sales_Tax_Amount` | Numeric | nullable |
| `Sent_Flag` | Boolean |  |
| `Ship_To_Address_Line1` | Text | nullable |
| `Ship_To_Address_Line2` | Text | nullable |
| `Ship_To_Address_RecID` | Numeric | nullable |
| `Ship_To_Attention` | Text | nullable |
| `Ship_To_City` | Text | nullable |
| `Ship_To_Company_RecID` | Numeric |  |
| `Ship_To_Country` | Text | nullable |
| `Ship_To_Name` | Text | nullable |
| `Ship_To_PhoneNbr` | Text | nullable |
| `Ship_To_State_ID` | Text | nullable |
| `Ship_To_Zip` | Text | nullable |
| `State_ID` | Text | nullable |
| `Status_Description` | Text | nullable |
| `Tax1_Amount` | Numeric |  |
| `Tax2_Amount` | Numeric |  |
| `Tax3_Amount` | Numeric |  |
| `Tax4_Amount` | Numeric |  |
| `Tax5_Amount` | Numeric |  |
| `Tax6_Amount` | Numeric |  |
| `Tax_Code` | Text | nullable |
| `Tax_Code1` | Text | nullable |
| `Tax_Code2` | Text | nullable |
| `Tax_Code3` | Text | nullable |
| `Tax_Code4` | Text | nullable |
| `Tax_Code5` | Text | nullable |
| `Tax_Code6` | Text | nullable |
| `Tax_Code_RecID` | Numeric |  |
| `Territory` | Text | nullable |
| `Territory_RecID` | Numeric | nullable |
| `TicketNbr` | Numeric |  |
| `Time_Amount` | Numeric | nullable |
| `Top_Comment` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Zip` | Text | nullable |

#### InvoicePayments
|             |             |     |
|-------------|-------------|-----|
| `Applied_Amount` | Numeric |  |
| `Applied_By` | Text |  |
| `Billing_Application_RecID` | Numeric |  |
| `Billing_Log_RecID` | Numeric |  |
| `Credit_Memo_RecID` | Numeric | nullable |
| `Date_Applied` | DateTime | nullable |
| `Invoice_Number` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Payment_Type` | Text |  |
| `Updated_By` | Text |  |

#### InvoiceProduct
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric | nullable |
| `Billable_Flag` | Boolean |  |
| `Billing_Log_RecID` | Numeric | nullable |
| `Currency_RecID` | Numeric |  |
| `Currency_Symbol` | Text | nullable |
| `DisplaySymbol_Flag` | Boolean |  |
| `Extended_Amt` | Numeric | nullable |
| `IV_Item_RecID` | Numeric |  |
| `IV_Product_RecID` | Numeric |  |
| `Invoice_Number` | Text | nullable |
| `Item_Desc` | Text | nullable |
| `Item_ID` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Line_Desc` | Text | nullable |
| `Opportunity_RecID` | Numeric | nullable |
| `PM_Project_RecID` | Numeric | nullable |
| `Project_Name` | Text | nullable |
| `Quantity` | Numeric | nullable |
| `SR_Service_RecID` | Numeric | nullable |
| `SR_Summary` | Text | nullable |
| `Serial_Number` | Text | nullable |
| `Taxable_Flag` | Boolean |  |
| `Time_Zone` | Text | nullable |
| `UOM` | Text | nullable |
| `Unit_Price` | Numeric | nullable |
| `Updated_By` | Text | nullable |
| `quantity_cancelled` | Numeric |  |
| `sequence_number` | Numeric |  |
| `sub_number` | Numeric |  |

#### InvoiceTemplate
|             |             |     |
|-------------|-------------|-----|
| `BL_InvTemplate_Custom_RecID` | Numeric | nullable |
| `BL_InvTemplate_RecID` | Numeric | nullable |
| `BL_InvTemplate_Setup_RecID` | Numeric |  |
| `Template_Name` | Text | nullable |

#### InvoiceTime
|             |             |     |
|-------------|-------------|-----|
| `AgrAmtCovered` | Numeric |  |
| `AgrHrsCovered` | Numeric |  |
| `Agreement` | Text |  |
| `Billable_Amt` | Numeric | nullable |
| `Billable_Flag` | Boolean |  |
| `Billable_Hrs` | Numeric | nullable |
| `Billing_Log_RecID` | Numeric |  |
| `Billing_Unit_RecID` | Numeric | nullable |
| `BusGroup` | Text | nullable |
| `Charge_To` | Text | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric |  |
| `Currency_RecID` | Numeric |  |
| `Currency_Symbol` | Text | nullable |
| `Date_Entered_UTC` | DateTime |  |
| `Date_Start` | DateTime | nullable |
| `DisplaySymbol_Flag` | Boolean |  |
| `First_Name` | Text | nullable |
| `Hourly_Cost` | Numeric | nullable |
| `Hourly_Rate` | Numeric | nullable |
| `Invoice_Number` | Text | nullable |
| `Last_Name` | Text | nullable |
| `Location` | Text | nullable |
| `Member_ID` | Text |  |
| `Member_RecID` | Numeric | nullable |
| `NonBillable_Amt` | Numeric | nullable |
| `NonBillable_Hrs` | Numeric | nullable |
| `Notes` | Text | nullable |
| `Option_ID` | Text | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `PM_Project_RecID` | Numeric |  |
| `Project_ID` | Text | nullable |
| `Project_Phase` | Text | nullable |
| `SR_Service_RecID` | Numeric |  |
| `Summary` | Text | nullable |
| `Time_Agr_Header_RecID` | Numeric | nullable |
| `Time_End_UTC` | DateTime | nullable |
| `Time_RecID` | Numeric |  |
| `Time_Start_UTC` | DateTime | nullable |
| `Work_Role` | Text |  |
| `Work_Type` | Text |  |
| `pm_Phase_RecID` | Numeric | nullable |

#### InvoiceTypes
|             |             |     |
|-------------|-------------|-----|
| `Billing_Type_ID` | Text |  |
| `Downpayment_Flag` | Boolean | nullable |
| `InvoiceType_Desc` | Text | nullable |

#### Invoices
|             |             |     |
|-------------|-------------|-----|
| `AGR_Amount` | Numeric |  |
| `AGR_Header_RecID` | Numeric |  |
| `AGR_Hours` | Numeric | nullable |
| `Address_Line1` | Text | nullable |
| `Address_Line2` | Text | nullable |
| `Adj_Amount` | Numeric |  |
| `Adj_By` | Text | nullable |
| `Adj_Reason` | Text | nullable |
| `Agr_Adjustment` | Numeric |  |
| `Agreement_Name` | Text | nullable |
| `Apply_To` | Text | nullable |
| `Attention` | Text | nullable |
| `Billing_Contact_First_Name` | Text | nullable |
| `Billing_Contact_Last_Name` | Text | nullable |
| `Billing_Contact_RecID` | Numeric | nullable |
| `Billing_Log_RecID` | Numeric |  |
| `Billing_Status_RecID` | Numeric |  |
| `Billing_Terms` | Text | nullable |
| `Billing_Terms_RecID` | Numeric |  |
| `Billing_Type_Desc` | Text | nullable |
| `Billing_Type_ID` | Text | nullable |
| `Billing_Unit_RecID` | Numeric | nullable |
| `Bottom_Comment` | Text | nullable |
| `BusGroup` | Text | nullable |
| `City` | Text | nullable |
| `Closed_Flag` | Boolean |  |
| `CompanyRecId` | Numeric |  |
| `Company_Address_RecID` | Numeric | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric |  |
| `Country` | Text | nullable |
| `Credit_Amount` | Numeric | nullable |
| `Currency_RecID` | Numeric |  |
| `Date_Closed` | DateTime | nullable |
| `Date_Created` | DateTime |  |
| `Date_Invoice` | DateTime | nullable |
| `Date_Paid` | DateTime | nullable |
| `Date_Processing` | DateTime | nullable |
| `DownPayment` | Numeric |  |
| `Due_Date` | DateTime | nullable |
| `Expense_Amount` | Numeric |  |
| `Internal_Note` | Text | nullable |
| `Invoice_Amount` | Numeric |  |
| `Invoice_Number` | Text | nullable |
| `Invoice_Type` | Text |  |
| `Last_Update` | DateTime |  |
| `Location` | Text | nullable |
| `Misc_Amount` | Numeric |  |
| `Owner_Level_RecID` | Numeric |  |
| `PM_Phase_RecID` | Numeric | nullable |
| `PM_Project_RecID` | Numeric |  |
| `PO_Number` | Text | nullable |
| `Paid_Amount` | Numeric |  |
| `Paid_Flag` | Numeric |  |
| `Phase_ID` | Text | nullable |
| `Processing_Flag` | Boolean |  |
| `Progress_Amount_Applied` | Numeric |  |
| `Project_ID` | Text | nullable |
| `Reference` | Text | nullable |
| `Rem_Downpayment` | Numeric |  |
| `Remaining_Credit_Balance` | Numeric | nullable |
| `Remit_To_Name` | Text | nullable |
| `Remit_To_RecID` | Numeric |  |
| `SalesOrderNbr` | Numeric | nullable |
| `Sales_Tax_Amount` | Numeric |  |
| `Sent_Flag` | Boolean | nullable |
| `State_ID` | Text | nullable |
| `Status_Description` | Text | nullable |
| `Tax1_Amount` | Numeric |  |
| `Tax2_Amount` | Numeric |  |
| `Tax3_Amount` | Numeric |  |
| `Tax4_Amount` | Numeric |  |
| `Tax5_Amount` | Numeric |  |
| `Tax6_Amount` | Numeric |  |
| `Tax_Code` | Text | nullable |
| `Tax_Code1` | Text | nullable |
| `Tax_Code2` | Text | nullable |
| `Tax_Code3` | Text | nullable |
| `Tax_Code4` | Text | nullable |
| `Tax_Code5` | Text | nullable |
| `Tax_Code6` | Text | nullable |
| `Tax_Code_RecID` | Numeric | nullable |
| `Territory` | Text | nullable |
| `Territory_recid` | Numeric | nullable |
| `TicketNbr` | Numeric |  |
| `Ticket_Summary` | Text | nullable |
| `Time_Amount` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Top_Comment` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Zip` | Text | nullable |
| `ship_to_company_address_recid` | Numeric | nullable |

#### KbResolutionAuditTrail
|             |             |     |
|-------------|-------------|-----|
| `Billing_Unit_RecID` | Numeric | nullable |
| `Company_RecId` | Numeric | nullable |
| `Configuration_Type_RecId` | Numeric | nullable |
| `Created_By` | Text |  |
| `Detail_Problem` | Text | nullable |
| `Internal_Notes` | Text | nullable |
| `KB_Category_RecID` | Numeric | nullable |
| `KB_Resolution_RecID` | Numeric |  |
| `KB_Status_Key` | Text |  |
| `KB_SubCategory_RecID` | Numeric | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Owner_Level_RecID` | Numeric | nullable |
| `Resolution` | Text | nullable |
| `SR_Board_RecID` | Numeric | nullable |
| `Submitted_By` | Text | nullable |
| `Summary` | Text | nullable |

#### KnowledgebaseCategory
|             |             |     |
|-------------|-------------|-----|
| `Billing_Unit_RecID` | Numeric | nullable |
| `Description` | Text | nullable |
| `KB_Category_RecID` | Numeric |  |
| `Last_Update` | DateTime |  |
| `Owner_Level_RecID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### KnowledgebaseSubCategory
|             |             |     |
|-------------|-------------|-----|
| `Billing_Unit_RecID` | Numeric | nullable |
| `Description` | Text | nullable |
| `KB_Category_RecID` | Numeric |  |
| `KB_SubCategory_RecID` | Numeric |  |
| `Last_Update` | DateTime | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### Link
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime | nullable |
| `Link_Definition` | Text | nullable |
| `Link_Name` | Text |  |
| `Screen_Link_RecID` | Numeric |  |
| `Screen_Link_Table_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### LinkTokens
|             |             |     |
|-------------|-------------|-----|
| `Company_Flag` | Boolean |  |
| `Contact_Flag` | Boolean |  |
| `Service_Flag` | Boolean | nullable |
| `Token` | Text | nullable |
| `Token_Description` | Text | nullable |
| `Token_RecID` | Numeric |  |

#### Locale
|             |             |     |
|-------------|-------------|-----|
| `Default_Flag` | Boolean | nullable |
| `Locale` | Text |  |
| `Locale_RecID` | Numeric |  |

#### LocationBusGroup
|             |             |     |
|-------------|-------------|-----|
| `Billing_Unit_RecID` | Numeric |  |
| `BusGroup` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Location` | Text | nullable |
| `Owner_Level_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### Managed_Device_XRef
|             |             |     |
|-------------|-------------|-----|
| `AGR_Type_RecID` | Numeric | nullable |
| `AgreementType` | Text | nullable |
| `CS_Survey_RecID` | Numeric | nullable |
| `Configuration_Type` | Text | nullable |
| `IV_Item_RecID` | Numeric | nullable |
| `Inactive_Flag` | Boolean | nullable |
| `Last_Update` | DateTime | nullable |
| `Level` | Text | nullable |
| `Mgmt_It_Levels_RecID` | Numeric | nullable |
| `Mgmt_It_Setup_RecID` | Numeric |  |
| `Mgmt_Solution_Name` | Text | nullable |
| `ProductName` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Type` | Text | nullable |
| `Updated_By` | Text | nullable |

#### Manufacturer
|             |             |     |
|-------------|-------------|-----|
| `Inactive_Flag` | Boolean | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Manufacturer_Name` | Text |  |
| `Manufacturer_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### Market
|             |             |     |
|-------------|-------------|-----|
| `Last_Update_UTC` | DateTime |  |
| `MarketId` | Numeric |  |
| `MarketName` | Text | nullable |

#### MarketingCampaign
|             |             |     |
|-------------|-------------|-----|
| `Actual_Cost` | Numeric |  |
| `Budget_Cost` | Numeric |  |
| `Budget_Revenue` | Numeric |  |
| `Campaign_Status_RecID` | Numeric | nullable |
| `Campaign_SubType` | Text | nullable |
| `Campaign_Subtype_RecID` | Numeric | nullable |
| `Campaign_Type` | Text | nullable |
| `Cancel_Days` | Numeric | nullable |
| `Cancel_Type` | Text | nullable |
| `Date_Cancel` | DateTime | nullable |
| `Date_End` | DateTime | nullable |
| `Date_Start` | DateTime | nullable |
| `Emails_Sent` | Numeric | nullable |
| `Group_Type_RecID` | Numeric | nullable |
| `Inactive` | Text |  |
| `Inactive_Flag` | Boolean | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Location` | Text | nullable |
| `Lost_Opportunities` | Numeric |  |
| `Lost_Revenue` | Numeric | nullable |
| `Marketing_Campaign_RecID` | Numeric |  |
| `Marketing_ID` | Text | nullable |
| `Notes` | Text | nullable |
| `Open_Opportunities` | Numeric |  |
| `Open_Revenue` | Numeric | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `Status` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Total_Opportunities` | Numeric |  |
| `Updated_By` | Text | nullable |
| `Won_Opportunities` | Numeric |  |
| `Won_Revenue` | Numeric | nullable |

#### MarketingEmailsOpened
|             |             |     |
|-------------|-------------|-----|
| `Contact_RecID` | Numeric | nullable |
| `Date_Opened` | DateTime |  |
| `Marketing_Campaign_RecID` | Numeric |  |
| `Marketing_Manager_Email_Opened_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |

#### MarketingFormsSubmitted
|             |             |     |
|-------------|-------------|-----|
| `Contact_RecID` | Numeric | nullable |
| `Date_Submitted` | DateTime |  |
| `Marketing_Campaign_RecID` | Numeric |  |
| `Marketing_Manager_Form_Submitted_RecID` | Numeric |  |
| `Page_Sub_Type` | Text | nullable |
| `Page_Type` | Text | nullable |
| `QueryString` | Text | nullable |
| `Status` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Topic` | Text | nullable |
| `URL` | Text |  |
| `Version` | Text | nullable |

#### MarketingLinksClicked
|             |             |     |
|-------------|-------------|-----|
| `Contact_RecID` | Numeric | nullable |
| `Date_Clicked` | DateTime |  |
| `Marketing_Campaign_RecID` | Numeric |  |
| `Marketing_Manager_Link_Clicked_RecID` | Numeric |  |
| `QueryString` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `URL` | Text |  |

#### MarketingROI
|             |             |     |
|-------------|-------------|-----|
| `Actual_Cost` | Numeric |  |
| `Campaign` | Text | nullable |
| `Campaign_SubType` | Text | nullable |
| `Campaign_Type` | Text | nullable |
| `End_Date` | DateTime |  |
| `Last_Update` | DateTime | nullable |
| `Location` | Text | nullable |
| `Lost_Opportunities` | Numeric |  |
| `Lost_Revenue` | Numeric | nullable |
| `Open_Opportunities` | Numeric |  |
| `Open_Revenue` | Numeric | nullable |
| `Start_Date` | DateTime | nullable |
| `Status` | Text |  |
| `Time_Zone` | Text | nullable |
| `Total_Opportunities` | Numeric |  |
| `Updated_By` | Text | nullable |
| `Won_Opportunities` | Numeric |  |
| `Won_Revenue` | Numeric | nullable |

#### MeetingAudit
|             |             |     |
|-------------|-------------|-----|
| `Affected_Record` | Text | nullable |
| `Audit_Source_ID` | Text | nullable |
| `Audit_SubType` | Text | nullable |
| `Audit_Text` | Text | nullable |
| `Audit_Type` | Text | nullable |
| `Created_By` | Text |  |
| `Date_Entered_UTC` | DateTime |  |
| `Locale_RecID` | Numeric | nullable |
| `Meeting_Audit_RecID` | Numeric |  |
| `Meeting_RecID` | Numeric |  |
| `New_Value` | Text | nullable |
| `Old_Value` | Text | nullable |

#### Member
|             |             |     |
|-------------|-------------|-----|
| `Activity_Class_RecID` | Numeric | nullable |
| `Activity_Type_RecID` | Numeric | nullable |
| `Approved_By` | Text | nullable |
| `Billable_Forecast` | Numeric | nullable |
| `Billing_Unit_RecID` | Numeric | nullable |
| `Board_Name` | Text | nullable |
| `Country` | Text | nullable |
| `Country_RecID` | Numeric | nullable |
| `Daily_Capacity` | Numeric | nullable |
| `Date_Hire` | DateTime | nullable |
| `Date_Inactive` | DateTime | nullable |
| `Default_Email` | Numeric | nullable |
| `Default_Loc_RecID` | Numeric | nullable |
| `Default_Phone` | Numeric | nullable |
| `Default_Sales_Basis` | Text | nullable |
| `Default_Sales_Billing_Unit` | Numeric | nullable |
| `Default_Sales_Display` | Text | nullable |
| `Default_Sales_Owner_Level` | Numeric | nullable |
| `Default_Ter_RecID` | Numeric | nullable |
| `Disable_Login_Flag` | Boolean | nullable |
| `EX_Company_Flag` | Boolean |  |
| `Email_Address` | Text | nullable |
| `Email_Address2` | Text | nullable |
| `Email_Address3` | Text | nullable |
| `Enter_Company_Flag` | Boolean |  |
| `Exp_Approver` | Text | nullable |
| `First_Name` | Text | nullable |
| `Hourly_Cost` | Text | nullable |
| `Hourly_Rate` | Numeric | nullable |
| `Image_Link` | Text | nullable |
| `Inactive_Flag` | Boolean |  |
| `Last_Login_UTC` | DateTime | nullable |
| `Last_Name` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `License_Type` | Text | nullable |
| `MAPI_Name` | Text | nullable |
| `Member_Full_Name` | Text |  |
| `Member_ID` | Text |  |
| `Member_RecID` | Numeric |  |
| `Member_Type_Desc` | Text | nullable |
| `Member_Type_RecID` | Numeric | nullable |
| `Middle_Initial` | Text | nullable |
| `Mobile_Flag` | Boolean | nullable |
| `Notes` | Text | nullable |
| `Office_Calendar_RecID` | Numeric | nullable |
| `Owner_ID` | Numeric | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `PM_Billing_Unit_Recid` | Numeric | nullable |
| `PM_Owner_Level_RecID` | Numeric | nullable |
| `PR_Emp_ID` | Text | nullable |
| `PhoneNbr` | Text | nullable |
| `PhoneNbr2` | Text | nullable |
| `PhoneNbr2_Mobile` | Text | nullable |
| `PhoneNbr3` | Text | nullable |
| `PhoneNbr3_Ext` | Text | nullable |
| `PhoneNbr_Ext` | Text | nullable |
| `Remote_Package_Account_ID` | Text | nullable |
| `Remote_Package_ID` | Text | nullable |
| `Remote_Package_Login` | Text | nullable |
| `Remote_Package_Platform` | Text | nullable |
| `Reports_To` | Text | nullable |
| `Require_Exp_Flag` | Boolean | nullable |
| `Require_Time_Flag` | Boolean | nullable |
| `Restrict_BU_Flag` | Boolean | nullable |
| `Restrict_Loc_Flag` | Boolean | nullable |
| `Restrict_PM_BU_Flag` | Boolean |  |
| `Restrict_PM_Loc_Flag` | Boolean |  |
| `Restrict_SB_Loc_Flag` | Boolean | nullable |
| `Restrict_Ter_Flag` | Boolean | nullable |
| `Role_ID` | Text | nullable |
| `SR_Billing_Unit_RecID` | Numeric | nullable |
| `SR_Board_RecID` | Numeric | nullable |
| `SR_Location_RecID` | Numeric | nullable |
| `SR_Owner_Level_RecID` | Numeric | nullable |
| `Sch_BU_RecID` | Numeric | nullable |
| `Sch_NoDisplay_Flag` | Boolean | nullable |
| `Sch_OL_RecID` | Numeric | nullable |
| `Sch_Restrict_Flag` | Boolean | nullable |
| `Sched_Capacity` | Numeric | nullable |
| `Scheduling_Auto_Popup_Quick_Notes` | Boolean |  |
| `Scheduling_Auto_Stopwatch` | Boolean |  |
| `System_Flag` | Boolean | nullable |
| `Time_StartEnd_Flag` | Boolean |  |
| `Time_Zone` | Text | nullable |
| `Time_Zone_name` | Text | nullable |
| `Title` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Utilization_Flag` | Boolean |  |
| `Vendor_Nbr` | Text | nullable |
| `Warehouse_Bin_Flag` | Boolean |  |
| `Warehouse_Bin_RecID` | Numeric | nullable |
| `Warehouse_Flag` | Boolean | nullable |
| `Warehouse_RecID` | Numeric | nullable |
| `Work_Role` | Text | nullable |
| `Work_Type` | Text | nullable |
| `time_zone_recid` | Numeric | nullable |

#### MemberCertifications
|             |             |     |
|-------------|-------------|-----|
| `Cert_Name` | Text | nullable |
| `Cert_Nbr` | Text | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric | nullable |
| `Date_Expires` | DateTime | nullable |
| `Date_Received` | DateTime | nullable |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Member_RecID` | Numeric | nullable |
| `Notes` | Text | nullable |
| `Percent_Complete` | Numeric | nullable |
| `RM_Cert_Mbr_RecID` | Numeric |  |
| `RM_Cert_RecID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### MemberSecurityRoles
|             |             |     |
|-------------|-------------|-----|
| `Add_Level` | Numeric | nullable |
| `Delete_Level` | Numeric | nullable |
| `Edit_Level` | Numeric | nullable |
| `FO_Role_Security_RecID` | Numeric |  |
| `Inquire_Level` | Numeric | nullable |
| `Last_Update` | DateTime | nullable |
| `Member_ID` | Text |  |
| `Module_ID` | Text | nullable |
| `Module_Name` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### MemberSkills
|             |             |     |
|-------------|-------------|-----|
| `Cat_Name` | Text | nullable |
| `Cert_Flag` | Boolean |  |
| `Description` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Member_RecID` | Numeric | nullable |
| `Notes` | Text | nullable |
| `RM_Skill_Cat_RecID` | Numeric | nullable |
| `RM_Skill_Level_ID` | Numeric | nullable |
| `RM_Skill_Mbr_RecID` | Numeric |  |
| `RM_Skill_RecID` | Numeric | nullable |
| `Skill_Name` | Text | nullable |
| `Skill_Rating` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Years_Exp` | Numeric | nullable |

#### MyAccountCustomFields
|             |             |     |
|-------------|-------------|-----|
| `Last_Update_UTC` | DateTime |  |
| `Member_ID` | Text |  |
| `Member_RecID` | Numeric |  |
| `Pod_RecID` | Numeric |  |
| `Updated_By` | Text |  |
| `User_Defined_Field_RecID` | Numeric |  |
| `User_Defined_Field_Value` | Text |  |
| `customfield_podID` | Text |  |
| `myaccount_customfield` | Text |  |
| `myaccount_fieldtype` | Text | nullable |

#### MyCompany
|             |             |     |
|-------------|-------------|-----|
| `COO_RecID` | Numeric | nullable |
| `Controller_RecID` | Numeric | nullable |
| `Currency_ID` | Text | nullable |
| `Dispatch_RecID` | Numeric | nullable |
| `DutyManager_RecID` | Numeric | nullable |
| `Internal_Company_RecID` | Numeric | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Office_Calendar_RecID` | Text | nullable |
| `President_RecID` | Numeric | nullable |
| `SO_ProbLock_Flag` | Boolean | nullable |
| `Schedule_Span_RecID` | Numeric | nullable |
| `ServiceManager_RecID` | Numeric | nullable |
| `TE_NoFutureRecords_Flag` | Boolean |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### NoteType
|             |             |     |
|-------------|-------------|-----|
| `Default_Flag` | Boolean |  |
| `Description` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Note_Type_ID` | Text |  |
| `Note_Type_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### NotifyWho
|             |             |     |
|-------------|-------------|-----|
| `External_Flag` | Boolean |  |
| `Notify_Description` | Text | nullable |
| `Service_Flag` | Boolean |  |
| `WF_NotifyWho_ID` | Text |  |
| `WF_NotifyWho_RecID` | Numeric |  |

#### Opportunity
|             |             |     |
|-------------|-------------|-----|
| `Agreement_Cost` | Numeric | nullable |
| `Agreement_Revenue` | Numeric | nullable |
| `Agreement_Type` | Text | nullable |
| `BusGroup` | Text | nullable |
| `Closed_By` | Text | nullable |
| `Closed_Flag` | Boolean |  |
| `Closed_Status` | Text |  |
| `CompanyRecId` | Numeric | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric | nullable |
| `Contact_Name` | Text | nullable |
| `Contact_RecID` | Numeric | nullable |
| `CustomerPO` | Text | nullable |
| `Date_Became_Lead` | DateTime | nullable |
| `Date_Closed` | DateTime | nullable |
| `Date_Update` | DateTime | nullable |
| `Entered_By` | Text | nullable |
| `Expected_Close_Date` | DateTime | nullable |
| `Forecast` | Text |  |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Location` | Text | nullable |
| `Lost_Revenue` | Numeric |  |
| `Opportunity_Desc` | Text | nullable |
| `Opportunity_Name` | Text | nullable |
| `Opportunity_RecID` | Numeric |  |
| `Other1_Cost` | Numeric | nullable |
| `Other1_Revenue` | Numeric | nullable |
| `Other2_Cost` | Numeric | nullable |
| `Other2_Revenue` | Numeric | nullable |
| `Probability` | Numeric | nullable |
| `Product_Cost` | Numeric | nullable |
| `Product_Revenue` | Numeric | nullable |
| `Rating` | Text | nullable |
| `Referral_Flag` | Numeric |  |
| `Sales_Rep1` | Text | nullable |
| `Sales_Rep1_FullName` | Text | nullable |
| `Sales_Rep2` | Text | nullable |
| `Sales_Rep2_FullName` | Text | nullable |
| `Sales_Stage` | Text | nullable |
| `Service_Cost` | Numeric | nullable |
| `Service_Revenue` | Numeric | nullable |
| `Status` | Text | nullable |
| `Status_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Total_Cost` | Numeric | nullable |
| `Total_Revenue` | Numeric | nullable |
| `Universal_Formatted_Date_Update` | Text | nullable |
| `Updated_By` | Text | nullable |
| `billing_unit_recid` | Numeric | nullable |
| `marketing` | Text | nullable |
| `owner_level_recid` | Numeric | nullable |
| `so_Type` | Text | nullable |
| `so_type_recid` | Numeric | nullable |

#### OpportunityCustomFields
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime |  |
| `Opportunity_Name` | Text | nullable |
| `Opportunity_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |
| `User_Defined_Field_RecID` | Numeric |  |
| `customfield_podID` | Text |  |
| `opportunity_customfield` | Text |  |
| `opportunity_customvalue` | Text | nullable |
| `opportunity_fieldtype` | Text | nullable |

#### OpportunityInterest
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `SO_Interest_Desc` | Text | nullable |
| `SO_Interest_RecID` | Numeric |  |
| `Sort_Order` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### OpportunityNote
|             |             |     |
|-------------|-------------|-----|
| `Entered_By` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Note_Type_RecID` | Numeric | nullable |
| `Notes` | Text | nullable |
| `Opportunity_RecID` | Numeric | nullable |
| `SO_Flag` | Boolean |  |
| `SO_Notes_RecID` | Numeric |  |
| `Seq_Nbr` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### OpportunityPipeline
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `SO_Pipeline_Desc` | Text | nullable |
| `SO_Pipeline_RecID` | Numeric |  |
| `SO_Probability_RecID` | Numeric | nullable |
| `Seq_Nbr` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### OpportunityProbability
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Probability` | Numeric | nullable |
| `SO_Probability_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### OpportunitySalesRole
|             |             |     |
|-------------|-------------|-----|
| `Description` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `SO_Role_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### OpportunityStatus
|             |             |     |
|-------------|-------------|-----|
| `Closed_Flag` | Boolean |  |
| `Date_Entered_UTC` | DateTime |  |
| `Default_Flag` | Boolean |  |
| `Entered_By` | Text |  |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Lost_Flag` | Boolean |  |
| `SO_Opp_Status_Desc` | Text | nullable |
| `SO_Opp_Status_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Won_Flag` | Boolean |  |

#### OpportunityType
|             |             |     |
|-------------|-------------|-----|
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime |  |
| `SO_Type_Desc` | Text | nullable |
| `SO_Type_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Update_By` | Text | nullable |

#### OpportunityUrgency
|             |             |     |
|-------------|-------------|-----|
| `Default_Flag` | Boolean |  |
| `SO_Urgency_Desc` | Text |  |
| `SO_Urgency_RecID` | Numeric |  |
| `Sort_Order` | Numeric | nullable |

#### Opportunity_Restricted
|             |             |     |
|-------------|-------------|-----|
| `Agreement_Cost` | Numeric | nullable |
| `Agreement_Revenue` | Numeric | nullable |
| `Agreement_Type` | Text | nullable |
| `BusGroup` | Text | nullable |
| `Closed_By` | Text | nullable |
| `Closed_Flag` | Boolean |  |
| `Closed_Status` | Text |  |
| `CompanyRecId` | Numeric | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric | nullable |
| `Contact_Name` | Text | nullable |
| `Contact_RecID` | Numeric | nullable |
| `CustomerPO` | Text | nullable |
| `Date_Became_Lead` | DateTime | nullable |
| `Date_Closed` | DateTime | nullable |
| `Date_Update` | DateTime | nullable |
| `Entered_By` | Text | nullable |
| `Expected_Close_Date` | DateTime | nullable |
| `Forecast` | Text |  |
| `Influencer_Contact_RecID` | Numeric | nullable |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Location` | Text | nullable |
| `Lost_Revenue` | Numeric |  |
| `Opportunity_Desc` | Text | nullable |
| `Opportunity_Name` | Text | nullable |
| `Opportunity_RecID` | Numeric |  |
| `Other1_Cost` | Numeric | nullable |
| `Other1_Revenue` | Numeric | nullable |
| `Other2_Cost` | Numeric | nullable |
| `Other2_Revenue` | Numeric | nullable |
| `Probability` | Numeric | nullable |
| `Product_Cost` | Numeric | nullable |
| `Product_Revenue` | Numeric | nullable |
| `Rating` | Text | nullable |
| `Referral_Flag` | Numeric |  |
| `Sales_Rep1` | Text | nullable |
| `Sales_Rep1_FullName` | Text | nullable |
| `Sales_Rep2` | Text | nullable |
| `Sales_Rep2_FullName` | Text | nullable |
| `Sales_Stage` | Text | nullable |
| `Service_Cost` | Numeric | nullable |
| `Service_Revenue` | Numeric | nullable |
| `Status` | Text | nullable |
| `Status_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Total_Cost` | Numeric | nullable |
| `Total_Revenue` | Numeric | nullable |
| `Universal_Formatted_Date_Update` | Text | nullable |
| `Updated_By` | Text | nullable |
| `billing_unit_recid` | Numeric | nullable |
| `marketing` | Text | nullable |
| `owner_level_recid` | Numeric | nullable |
| `so_Type` | Text | nullable |
| `so_type_recid` | Numeric | nullable |

#### OwnerLevel
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Location` | Text | nullable |
| `Location_Flag` | Boolean | nullable |
| `Member_ID` | Text | nullable |
| `Notify_Flag` | Boolean |  |
| `OL_Address_Line1` | Text | nullable |
| `OL_Address_Line2` | Text | nullable |
| `OL_City` | Text | nullable |
| `OL_Country_RecID` | Numeric | nullable |
| `OL_PhoneNbr` | Text | nullable |
| `OL_Phonenbr_Fax` | Text | nullable |
| `OL_State_ID` | Text | nullable |
| `OL_Zip` | Text | nullable |
| `OWA_Link` | Text | nullable |
| `Office_Calendar_RecID` | Numeric | nullable |
| `Owner_Level_ID` | Numeric |  |
| `Owner_Level_RecID` | Numeric |  |
| `Reports_To_RecID` | Numeric | nullable |
| `SalesRep_ID` | Text | nullable |
| `Sales_Territory_Flag` | Boolean |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Xref_ID` | Text | nullable |
| `client_flag` | Boolean |  |
| `time_zone_recid` | Numeric | nullable |

#### OwnershipType
|             |             |     |
|-------------|-------------|-----|
| `Description` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Ownership_Type_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### PhaseStatus
|             |             |     |
|-------------|-------------|-----|
| `Closed_Flag` | Boolean |  |
| `Default_Flag` | Boolean |  |
| `Description` | Text |  |
| `Inactive_Flag` | Boolean |  |
| `Last_Update_UTC` | DateTime |  |
| `Phase_Status_RecID` | Numeric |  |
| `Updated_By` | Text |  |

#### Pod
|             |             |     |
|-------------|-------------|-----|
| `Last_Update_UTC` | DateTime |  |
| `Locale_Key_RecID` | Numeric | nullable |
| `PodID` | Text |  |
| `Pod_RecID` | Numeric |  |
| `ScreenID` | Text |  |
| `Updated_By` | Text |  |

#### PortalAgrType
|             |             |     |
|-------------|-------------|-----|
| `AGR_Inactive_Flag` | Boolean | nullable |
| `AGR_Type_Desc` | Text | nullable |
| `AGR_Type_RecID` | Numeric |  |
| `BU_Restrict_Flag` | Boolean | nullable |
| `Billing_Unit_RecID` | Numeric | nullable |
| `BusGroup` | Text | nullable |
| `Last_Update` | DateTime |  |
| `OL_Restrict_Flag` | Boolean | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `Portal_Config_RecID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `location` | Text | nullable |

#### PortalConfigNames
|             |             |     |
|-------------|-------------|-----|
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric | nullable |
| `Default_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Portal_Name` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### PortalConfigServiceBoards
|             |             |     |
|-------------|-------------|-----|
| `Board_Name` | Text | nullable |
| `Portal_Config_RecID` | Numeric |  |
| `Portal_Name` | Text | nullable |
| `SR_Board_RecID` | Numeric |  |

#### PortalInvoices
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric |  |
| `Agreement_Name` | Text | nullable |
| `Balance` | Numeric | nullable |
| `Billing_Log_RecID` | Numeric |  |
| `Billing_Status_RecID` | Numeric | nullable |
| `Billing_Terms_RecID` | Numeric | nullable |
| `Billing_Type_ID` | Text | nullable |
| `Closed_Flag` | Boolean | nullable |
| `CompanyAccountNumber` | Text | nullable |
| `CompanyFinanceStatus` | Text | nullable |
| `CompanyRecId` | Numeric | nullable |
| `Company_ID` | Text | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric | nullable |
| `Credit_Amount` | Numeric | nullable |
| `CurrencySymbol` | Text | nullable |
| `Date_Closed` | DateTime | nullable |
| `Date_Created` | DateTime | nullable |
| `Date_Invoice` | DateTime | nullable |
| `Date_Paid` | DateTime | nullable |
| `Due_Date` | DateTime | nullable |
| `Invoice_Amount` | Numeric |  |
| `Invoice_Number` | Text | nullable |
| `Invoice_Type` | Text |  |
| `Last_Update` | DateTime | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `PM_Project_RecID` | Numeric |  |
| `Paid_Amount` | Numeric | nullable |
| `Processing_Flag` | Boolean |  |
| `Project_ID` | Text | nullable |
| `Remit_To_RecID` | Numeric | nullable |
| `Status_Description` | Text | nullable |
| `TicketNbr` | Numeric |  |
| `Ticket_Summary` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Universal_Formatted_Date_Invoice` | Text | nullable |
| `Universal_Formatted_Date_Paid` | Text | nullable |
| `Universal_Formatted_Due_Date` | Text | nullable |
| `Universal_Formatted_Due_Date_Text` | Text | nullable |
| `Updated_By` | Text | nullable |

#### PortalProject
|             |             |     |
|-------------|-------------|-----|
| `BillingMethod_Desc` | Text | nullable |
| `Closed_Flag` | Boolean |  |
| `CompanyRecId` | Numeric |  |
| `Contact_FirstName` | Text | nullable |
| `Contact_LastName` | Text | nullable |
| `Date_Closed` | DateTime | nullable |
| `Date_Closed_UTC` | DateTime | nullable |
| `Description` | Text | nullable |
| `EstimatedEnd` | DateTime | nullable |
| `EstimatedStart` | DateTime | nullable |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Owner_Level_RecID` | Numeric |  |
| `PM_Billing_Method_ID` | Text | nullable |
| `ProjectManager_FirstName` | Text | nullable |
| `ProjectManager_LastName` | Text | nullable |
| `ProjectName` | Text | nullable |
| `ProjectNbr` | Numeric |  |
| `ProjectType_Desc` | Text | nullable |
| `SR_Board_RecID` | Numeric |  |
| `Status_Desc` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Universal_Formatted_Date_Closed` | Numeric | nullable |
| `Universal_Formatted_Date_Required` | Text | nullable |
| `Universal_Formatted_Date_Start` | Text | nullable |
| `Universal_Formatted_Last_Update` | Text | nullable |
| `Updated_By` | Text | nullable |

#### PortalSecurity
|             |             |     |
|-------------|-------------|-----|
| `Function_Description` | Text | nullable |
| `Function_Id` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Level1` | Boolean | nullable |
| `Level2` | Boolean | nullable |
| `Level3` | Boolean | nullable |
| `Level4` | Boolean | nullable |
| `Level5` | Boolean | nullable |
| `Level6` | Boolean | nullable |
| `Portal_Security_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### PortalSecurityCaptions
|             |             |     |
|-------------|-------------|-----|
| `Caption` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Security_Level` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### PortalService
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric | nullable |
| `Address_Line1` | Text |  |
| `Address_Line2` | Text |  |
| `Approved_Flag` | Boolean |  |
| `Board_Name` | Text | nullable |
| `City` | Text |  |
| `ClosedDesc` | Text |  |
| `Closed_Flag` | Boolean |  |
| `Country` | Text |  |
| `Date_Entered_UTC` | DateTime | nullable |
| `Date_Req` | DateTime | nullable |
| `Date_Required` | DateTime | nullable |
| `Detail_Description` | Text |  |
| `Hours_Actual` | Numeric | nullable |
| `Hours_Budget` | Numeric | nullable |
| `Internal_Analysis` | Text |  |
| `IsMerged` | Numeric |  |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime | nullable |
| `Location` | Text | nullable |
| `PostalCode` | Text |  |
| `Publish_Flag` | Boolean |  |
| `Rec_Type` | Text |  |
| `Resolution` | Text |  |
| `SR_Board_RecID` | Numeric |  |
| `ServiceSubType` | Text | nullable |
| `ServiceSubTypeItem` | Text | nullable |
| `ServiceType` | Text | nullable |
| `Site` | Text | nullable |
| `Site_Name` | Text | nullable |
| `Sla_Name` | Text | nullable |
| `Source` | Text | nullable |
| `State` | Text |  |
| `Status_SortOrder` | Numeric | nullable |
| `SubTypeItem_RecID` | Numeric | nullable |
| `SubType_RecID` | Numeric | nullable |
| `Summary` | Text | nullable |
| `Territory` | Text | nullable |
| `Territory_Manager` | Text | nullable |
| `TicketNbr` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Type_RecID` | Numeric | nullable |
| `Universal_Formatted_Date_Entered` | Text | nullable |
| `Universal_Formatted_Date_Required` | Text | nullable |
| `Universal_Formatted_Last_Update` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Urgency` | Text | nullable |
| `Urgency_Sort_Order` | Numeric | nullable |
| `billing_unit_recid` | Numeric | nullable |
| `closed_by` | Text | nullable |
| `company_name` | Text | nullable |
| `company_recid` | Numeric | nullable |
| `contact_name` | Text | nullable |
| `contact_recid` | Numeric |  |
| `date_closed` | DateTime | nullable |
| `date_entered` | DateTime | nullable |
| `entered_by` | Text | nullable |
| `owner_level_recid` | Numeric | nullable |
| `resource_list` | Text |  |
| `service_location` | Text | nullable |
| `sr_status_recid` | Numeric |  |
| `status_description` | Text | nullable |
| `territory_recid` | Numeric | nullable |

#### PortalTicketTypeDescription
|             |             |     |
|-------------|-------------|-----|
| `Board_Name` | Text | nullable |
| `PortalTicketType_Desc` | Text |  |
| `Portal_Config_RecID` | Numeric | nullable |
| `SR_Board_RecID` | Numeric |  |

#### PortalTicketTypes
|             |             |     |
|-------------|-------------|-----|
| `CompanyID` | Text | nullable |
| `CompanyRecID` | Numeric | nullable |
| `Default_Flag` | Boolean |  |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Owner_Level_RecID` | Numeric | nullable |
| `PortalTicketType_Desc` | Text |  |
| `Portal_Config_RecID` | Numeric | nullable |
| `Problem` | Text |  |
| `Summary` | Text |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |
| `recid` | Numeric |  |

#### PriceHeader
|             |             |     |
|-------------|-------------|-----|
| `IV_Price_Header_RecID` | Numeric |  |
| `Inactive_Flag` | Boolean | nullable |
| `Last_Update` | DateTime |  |
| `Location` | Text | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `Price_Schedule_Name` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### PricingSchedule
|             |             |     |
|-------------|-------------|-----|
| `Amount` | Numeric | nullable |
| `Category_Inactive_Flag` | Boolean | nullable |
| `Company_ID` | Text | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric | nullable |
| `Date_End` | DateTime | nullable |
| `Date_Start` | DateTime | nullable |
| `Default_Flag` | Boolean | nullable |
| `IV_Cat_RecID` | Numeric | nullable |
| `IV_Category_Description` | Text | nullable |
| `IV_Category_RecID` | Numeric | nullable |
| `IV_Item_Description` | Text | nullable |
| `IV_Item_RecID` | Numeric | nullable |
| `IV_Price_Break_RecID` | Numeric | nullable |
| `IV_Price_Detail_RecID` | Numeric |  |
| `IV_Price_Header_RecID` | Numeric |  |
| `IV_Price_Method_ID` | Text | nullable |
| `IV_SubCat_RecID` | Numeric | nullable |
| `IV_Type_RecID` | Numeric | nullable |
| `Inactive_Flag` | Boolean | nullable |
| `Item_ID` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `Price_Schedule_Name` | Text | nullable |
| `Quanity_Price_Break` | Boolean |  |
| `Quantity_End` | Numeric | nullable |
| `Quantity_Start` | Numeric | nullable |
| `SubCat_Description` | Text | nullable |
| `SubCat_Inactive_Flag` | Boolean | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### Product
|             |             |     |
|-------------|-------------|-----|
| `AGR_Detail_RecID` | Numeric | nullable |
| `AgrAmtCovered` | Numeric |  |
| `Agreement` | Text | nullable |
| `Billable_Amt` | Numeric | nullable |
| `BusGroup` | Text | nullable |
| `Date_Entered` | DateTime | nullable |
| `Extended_Cost` | Numeric | nullable |
| `Extended_Price_Amount` | Numeric | nullable |
| `IV_Class_ID` | Text | nullable |
| `IsParent` | Numeric |  |
| `IsPhaseProduct` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Line_Desc` | Text | nullable |
| `Location` | Text | nullable |
| `Manufacturer_RecID` | Numeric | nullable |
| `NonBillable_Amt` | Numeric | nullable |
| `Opportunity_RecID` | Numeric | nullable |
| `Quantity` | Numeric | nullable |
| `Quantity_Picked` | Numeric |  |
| `Quantity_Picked_Extended_Cost` | Numeric | nullable |
| `Quantity_Shipped` | Numeric |  |
| `Quantity_Shipped_Extended_Cost` | Numeric | nullable |
| `Sub_Number` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `billable_flag` | Boolean |  |
| `billing_log_recid` | Numeric | nullable |
| `charge_to` | Text | nullable |
| `company_name` | Text | nullable |
| `company_recid` | Numeric | nullable |
| `date_invoice` | DateTime | nullable |
| `invoice_flag` | Boolean |  |
| `invoice_number` | Text | nullable |
| `item_category` | Text | nullable |
| `item_desc` | Text | nullable |
| `item_id` | Text | nullable |
| `item_subcategory` | Text | nullable |
| `iv_item_recid` | Numeric |  |
| `iv_product_RecID` | Numeric |  |
| `option_id` | Text | nullable |
| `owner_level_recid` | Numeric |  |
| `parent_recid` | Numeric | nullable |
| `pm_project_recid` | Numeric | nullable |
| `project_name` | Text | nullable |
| `serial_number` | Text | nullable |
| `sr_service_recid` | Numeric | nullable |
| `sr_status` | Text | nullable |
| `sr_summary` | Text | nullable |
| `te_status_id` | Numeric | nullable |
| `territory` | Text | nullable |
| `time_status` | Text | nullable |
| `unit_cost` | Numeric | nullable |
| `unit_price` | Numeric | nullable |
| `uom` | Text | nullable |

#### ProductDetail
|             |             |     |
|-------------|-------------|-----|
| `Date_Picked` | DateTime | nullable |
| `Date_Shipped` | DateTime | nullable |
| `IV_Product_Description` | Text | nullable |
| `IV_Product_Detail_RecID` | Numeric |  |
| `IV_Product_RecID` | Numeric |  |
| `Last_Update` | DateTime |  |
| `Line_Number` | Numeric |  |
| `Picked_By` | Text | nullable |
| `Picked_Flag` | Numeric |  |
| `Quantity` | Numeric |  |
| `Quantity_Picked` | Numeric |  |
| `Quantity_Shipped` | Numeric |  |
| `Serial_Number` | Text | nullable |
| `Shipped_By` | Text | nullable |
| `Shipped_Flag` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Tracking_Number` | Text | nullable |
| `Updated_By` | Text |  |

#### ProductEntityType
|             |             |     |
|-------------|-------------|-----|
| `Customer_Usage_Type_Code` | Text |  |
| `Customer_Usage_Type_RecID` | Numeric |  |
| `Description` | Text |  |

#### Project
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric | nullable |
| `Address_Line1` | Text |  |
| `Address_Line2` | Text |  |
| `Age` | Numeric | nullable |
| `Board_Name` | Text | nullable |
| `BusGroup` | Text | nullable |
| `City` | Text |  |
| `ClosedDesc` | Text |  |
| `Closed_Flag` | Boolean | nullable |
| `Date_Required` | DateTime | nullable |
| `Detail_Description` | Text | nullable |
| `Hours_Actual` | Numeric | nullable |
| `Hours_Agreement` | Numeric | nullable |
| `Hours_Billable` | Numeric | nullable |
| `Hours_Invoiced` | Numeric | nullable |
| `Hours_NonBillable` | Numeric | nullable |
| `Hours_Remaining` | Numeric | nullable |
| `Hours_Scheduled` | Numeric | nullable |
| `Internal_Analysis` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Location` | Text | nullable |
| `PM_Billing_Method_ID` | Text | nullable |
| `PM_Billing_Method_RecID` | Numeric | nullable |
| `PM_Phase_RecID` | Numeric | nullable |
| `PM_Project_RecID` | Numeric |  |
| `Parent` | Text |  |
| `Percent_Complete_PerTicket` | Numeric | nullable |
| `Phase` | Text | nullable |
| `PhaseStatus` | Text | nullable |
| `PhaseWbsCode` | Text | nullable |
| `PhaseWbsSequence` | Numeric | nullable |
| `PostalCode` | Text |  |
| `Priority` | Text | nullable |
| `ProjectBillingMethod` | Text | nullable |
| `ProjectCloseDate` | Numeric | nullable |
| `ProjectCloseDateUTC` | DateTime | nullable |
| `ProjectEndDate` | DateTime | nullable |
| `ProjectManager` | Text | nullable |
| `ProjectManagerMemberID` | Text | nullable |
| `ProjectManagerRecID` | Numeric | nullable |
| `ProjectName` | Text | nullable |
| `ProjectNbr` | Numeric |  |
| `ProjectStartDate` | DateTime | nullable |
| `ProjectStatus` | Text | nullable |
| `ProjectType` | Text | nullable |
| `Rec_Type` | Text | nullable |
| `Resolution` | Text | nullable |
| `Resource_List` | Text | nullable |
| `SR_Board_RecID` | Numeric | nullable |
| `SR_Service_RecID` | Numeric | nullable |
| `SR_Type_RecID` | Numeric | nullable |
| `ServiceSubType` | Text | nullable |
| `ServiceSubTypeItem` | Text | nullable |
| `ServiceType` | Text |  |
| `State` | Text |  |
| `Status_Description` | Text | nullable |
| `Status_SortOrder` | Numeric | nullable |
| `SubTypeItem_RecID` | Numeric | nullable |
| `SubType_RecID` | Numeric | nullable |
| `Summary` | Text | nullable |
| `Territory` | Text | nullable |
| `Territory_Manager` | Text | nullable |
| `Territory_Recid` | Numeric | nullable |
| `TicketNbr` | Numeric | nullable |
| `TicketWbsSequence` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Type_RecID` | Numeric | nullable |
| `Updated_By` | Text | nullable |
| `agreement_name` | Text |  |
| `billing_unit_recid` | Numeric | nullable |
| `closed_by` | Text | nullable |
| `company_name` | Text | nullable |
| `company_recid` | Numeric |  |
| `contact_name` | Text | nullable |
| `date_closed` | DateTime | nullable |
| `date_entered` | DateTime | nullable |
| `entered_by` | Text | nullable |
| `hours_budget` | Numeric | nullable |
| `owner_level_recid` | Numeric | nullable |
| `service_location` | Text | nullable |
| `sr_status_recid` | Numeric | nullable |
| `team_name` | Text |  |
| `wbs_code` | Text | nullable |

#### Project2
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric | nullable |
| `Address_Line1` | Text |  |
| `Address_Line2` | Text |  |
| `Age` | Numeric | nullable |
| `Board_Name` | Text | nullable |
| `BusGroup` | Text | nullable |
| `City` | Text |  |
| `ClosedDesc` | Text |  |
| `Closed_Flag` | Boolean | nullable |
| `Date_Required` | DateTime | nullable |
| `Detail_Description` | Text | nullable |
| `Hours_Actual` | Numeric | nullable |
| `Hours_Agreement` | Numeric | nullable |
| `Hours_Billable` | Numeric | nullable |
| `Hours_Invoiced` | Numeric | nullable |
| `Hours_NonBillable` | Numeric | nullable |
| `Hours_Remaining` | Numeric | nullable |
| `Hours_Scheduled` | Numeric | nullable |
| `Internal_Analysis` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Location` | Text | nullable |
| `PM_Billing_Method_ID` | Text | nullable |
| `PM_Billing_Method_RecID` | Numeric | nullable |
| `PM_Phase_RecID` | Numeric | nullable |
| `PM_Project_RecID` | Numeric |  |
| `Parent` | Text |  |
| `Percent_Complete_PerTicket` | Numeric | nullable |
| `Phase` | Text | nullable |
| `PhaseStatus` | Text | nullable |
| `PhaseWbsCode` | Text | nullable |
| `PhaseWbsSequence` | Numeric | nullable |
| `PostalCode` | Text |  |
| `Priority` | Text | nullable |
| `ProjectBillingMethod` | Text | nullable |
| `ProjectCloseDate` | DateTime | nullable |
| `ProjectCloseDateUTC` | DateTime | nullable |
| `ProjectEndDate` | DateTime | nullable |
| `ProjectManager` | Text | nullable |
| `ProjectManagerMemberID` | Text | nullable |
| `ProjectManagerRecID` | Numeric | nullable |
| `ProjectName` | Text | nullable |
| `ProjectNbr` | Numeric |  |
| `ProjectStartDate` | DateTime | nullable |
| `ProjectStatus` | Text | nullable |
| `ProjectType` | Text | nullable |
| `Rec_Type` | Text | nullable |
| `Resolution` | Text | nullable |
| `Resource_List` | Text | nullable |
| `SR_Board_RecID` | Numeric | nullable |
| `SR_Service_RecID` | Numeric | nullable |
| `SR_Type_RecID` | Numeric | nullable |
| `ServiceSubType` | Text | nullable |
| `ServiceSubTypeItem` | Text | nullable |
| `ServiceType` | Text |  |
| `State` | Text |  |
| `Status_Description` | Text | nullable |
| `Status_SortOrder` | Numeric | nullable |
| `SubTypeItem_RecID` | Numeric | nullable |
| `SubType_RecID` | Numeric | nullable |
| `Summary` | Text | nullable |
| `Territory` | Text | nullable |
| `Territory_Manager` | Text | nullable |
| `Territory_Recid` | Numeric | nullable |
| `TicketNbr` | Numeric | nullable |
| `TicketWbsSequence` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Type_RecID` | Numeric | nullable |
| `Updated_By` | Text | nullable |
| `agreement_name` | Text |  |
| `billing_unit_recid` | Numeric | nullable |
| `closed_by` | Text | nullable |
| `company_name` | Text | nullable |
| `company_recid` | Numeric |  |
| `contact_name` | Text | nullable |
| `date_closed` | DateTime | nullable |
| `date_entered` | DateTime | nullable |
| `entered_by` | Text | nullable |
| `hours_budget` | Numeric | nullable |
| `owner_level_recid` | Numeric | nullable |
| `service_location` | Text | nullable |
| `sr_status_recid` | Numeric | nullable |
| `team_name` | Text |  |
| `wbs_code` | Text | nullable |

#### ProjectAudit
|             |             |     |
|-------------|-------------|-----|
| `Audit_Source` | Text | nullable |
| `Audit_Text` | Text | nullable |
| `Audit_Type` | Text | nullable |
| `Audit_Type_RecId` | Numeric |  |
| `Is_System_Update` | Boolean | nullable |
| `Last_Updated_utc` | DateTime |  |
| `PM_Project_RecID` | Numeric |  |
| `member_recid` | Numeric | nullable |

#### ProjectBillingMethods
|             |             |     |
|-------------|-------------|-----|
| `BillingMethod_Desc` | Text | nullable |
| `Default_Flag` | Boolean |  |
| `Override_Flag` | Boolean |  |
| `PM_Billing_Method_ID` | Text |  |
| `PM_Billing_Method_RecID` | Numeric |  |

#### ProjectBoard
|             |             |     |
|-------------|-------------|-----|
| `BillableExpenseInvoice` | Boolean | nullable |
| `BillableProductInvoice` | Boolean | nullable |
| `BillableTimeInvoice` | Boolean | nullable |
| `Inactive` | Boolean | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `ProjectBoardName` | Text | nullable |
| `ProjectBoardRecId` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ProjectContact
|             |             |     |
|-------------|-------------|-----|
| `Contact_RecID` | Numeric | nullable |
| `Last_Update` | DateTime | nullable |
| `PM_Contact_RecID` | Numeric |  |
| `PM_Project_RecID` | Numeric | nullable |
| `PM_Role_RecID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ProjectCustomFields
|             |             |     |
|-------------|-------------|-----|
| `Last_Update_UTC` | DateTime |  |
| `PM_Project_RecID` | Numeric |  |
| `Pod_RecID` | Numeric |  |
| `Project_ID` | Text | nullable |
| `Updated_By` | Text |  |
| `User_Defined_Field_RecID` | Numeric |  |
| `User_Defined_Field_Value` | Text |  |
| `customfield_podID` | Text |  |
| `project_customfield` | Text |  |
| `project_fieldtype` | Text | nullable |

#### ProjectHeader
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric | nullable |
| `Agreement_Name` | Text | nullable |
| `Billing_Unit_RecID` | Numeric |  |
| `Board_Name` | Text | nullable |
| `BusGroup` | Text | nullable |
| `Closed_By` | Text | nullable |
| `Closed_Flag` | Boolean |  |
| `Company_Address_RecID` | Numeric | nullable |
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric |  |
| `Contact_First_Name` | Text | nullable |
| `Contact_Full_Name` | Text |  |
| `Contact_Last_Name` | Text | nullable |
| `Contact_RecID` | Numeric | nullable |
| `Created_By` | Text |  |
| `Date_Closed_UTC` | DateTime | nullable |
| `Date_Entered_UTC` | DateTime |  |
| `Est_Days_Remaining` | Numeric | nullable |
| `Estimated_End_Date` | DateTime | nullable |
| `Estimated_Start_Date` | DateTime | nullable |
| `Hours_Actual` | Numeric | nullable |
| `Hours_Agreement` | Numeric | nullable |
| `Hours_Budget` | Numeric | nullable |
| `Hours_Budget_Remaining` | Numeric | nullable |
| `Hours_Invoiced` | Numeric | nullable |
| `Hours_NonBillable` | Numeric | nullable |
| `Hours_Scheduled` | Numeric | nullable |
| `Hours_billable` | Numeric | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Location` | Text | nullable |
| `Notes` | Text | nullable |
| `Owner_ID` | Numeric | nullable |
| `Owner_Level_RecID` | Numeric |  |
| `PM_Project_RecID` | Numeric |  |
| `PM_Status_RecID` | Numeric |  |
| `PM_Type_RecID` | Numeric | nullable |
| `Percent_Complete` | Numeric | nullable |
| `Project_Manager` | Text | nullable |
| `Project_Name` | Text | nullable |
| `Project_Status` | Text | nullable |
| `Project_Type` | Text | nullable |
| `SR_Board_RecID` | Numeric |  |
| `Updated_By` | Text | nullable |

#### ProjectNote
|             |             |     |
|-------------|-------------|-----|
| `Entered_By` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Note_Type_RecID` | Numeric | nullable |
| `Notes` | Text | nullable |
| `PM_Note_RecID` | Numeric |  |
| `PM_Project_RecID` | Numeric | nullable |
| `Red_Flag` | Boolean |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ProjectRole
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime | nullable |
| `Manager_Flag` | Boolean |  |
| `PM_Role_ID` | Text | nullable |
| `PM_Role_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Boolean |  |

#### ProjectStatus
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime |  |
| `ProjectName` | Text | nullable |
| `ProjectRecId` | Numeric |  |
| `StatusName` | Text | nullable |
| `StatusRecId` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ProjectStatuses
|             |             |     |
|-------------|-------------|-----|
| `Closed_Flag` | Boolean |  |
| `Default_flag` | Boolean |  |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime | nullable |
| `No_Time_Flag` | Boolean |  |
| `PM_Status_RecID` | Numeric |  |
| `ProjectStatus_Desc` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ProjectTeamMember
|             |             |     |
|-------------|-------------|-----|
| `Activity_Class_RecID` | Numeric | nullable |
| `Date_Est_End` | DateTime | nullable |
| `Date_Est_Start` | DateTime | nullable |
| `Hours_Est` | Numeric | nullable |
| `Last_Update` | DateTime | nullable |
| `Member_ID` | Text | nullable |
| `PM_Project_RecID` | Numeric | nullable |
| `PM_Role_RecID` | Numeric | nullable |
| `PM_Team_RecID` | Numeric |  |
| `RecID` | Numeric | nullable |
| `Team_Flag` | Boolean |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ProjectTemplate
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime | nullable |
| `Notes` | Text | nullable |
| `PM_Tmp_Project_RecID` | Numeric |  |
| `PM_Type_RecID` | Numeric | nullable |
| `Template_Name` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ProjectTypes
|             |             |     |
|-------------|-------------|-----|
| `Default_Flag` | Boolean |  |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `PM_Type_RecID` | Numeric |  |
| `ProjectType_Desc` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### PurchaseOrder
|             |             |     |
|-------------|-------------|-----|
| `Bill_To_Address_Line1` | Text | nullable |
| `Bill_To_Address_Line2` | Text | nullable |
| `Bill_To_City` | Text | nullable |
| `Bill_To_Company_Name` | Text | nullable |
| `Bill_To_Country` | Text | nullable |
| `Bill_To_PhoneNbr` | Text | nullable |
| `Bill_To_State` | Text | nullable |
| `Bill_To_Zip` | Text | nullable |
| `Billing_Terms_RecID` | Numeric | nullable |
| `Billing_Unit_RecID` | Numeric | nullable |
| `Billint_Terms_Description` | Text | nullable |
| `Closed_Flag` | Boolean | nullable |
| `Customer_Address_Line1` | Text | nullable |
| `Customer_Address_Line2` | Text | nullable |
| `Customer_Address_RecID` | Numeric | nullable |
| `Customer_City` | Text | nullable |
| `Customer_Company_Name` | Text | nullable |
| `Customer_Company_RecID` | Numeric | nullable |
| `Customer_Contact_Extension` | Text | nullable |
| `Customer_Contact_First_Name` | Text |  |
| `Customer_Contact_Full_Name` | Text |  |
| `Customer_Contact_Last_Name` | Text |  |
| `Customer_Contact_PhoneNbr` | Text | nullable |
| `Customer_Contact_RecID` | Numeric | nullable |
| `Customer_Country` | Text | nullable |
| `Customer_Site_Name` | Text | nullable |
| `Customer_State` | Text | nullable |
| `Customer_Zip` | Text | nullable |
| `Entered_By` | Text | nullable |
| `Freight_Cost` | Numeric | nullable |
| `Freight_Packing_Slip` | Text | nullable |
| `Internal_Notes` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Owner_Level_RecID` | Numeric | nullable |
| `PO_Number` | Text | nullable |
| `Purchase_Date` | DateTime | nullable |
| `Purchase_Order_RecID` | Numeric |  |
| `ShipMethodDescription` | Text | nullable |
| `Ship_Date` | DateTime | nullable |
| `ShipmentMethod_RecID` | Numeric | nullable |
| `Shipping_Instructions` | Text | nullable |
| `TimeZone` | Text | nullable |
| `Total` | Numeric | nullable |
| `Tracking_Number` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Vendor_Address_Line1` | Text | nullable |
| `Vendor_Address_Line2` | Text | nullable |
| `Vendor_Address_RecID` | Numeric | nullable |
| `Vendor_City` | Text | nullable |
| `Vendor_Company_Name` | Text | nullable |
| `Vendor_Company_RecID` | Numeric |  |
| `Vendor_Contact_First_Name` | Text |  |
| `Vendor_Contact_Full_Name` | Text |  |
| `Vendor_Contact_Last_Name` | Text |  |
| `Vendor_Contact_RecID` | Numeric | nullable |
| `Vendor_Country` | Text | nullable |
| `Vendor_Invoice_Date` | DateTime | nullable |
| `Vendor_Invoice_Number` | Text | nullable |
| `Vendor_Order_Number` | Text | nullable |
| `Vendor_PhoneNbr` | Text | nullable |
| `Vendor_Site_Name` | Text | nullable |
| `Vendor_State` | Text | nullable |
| `Vendor_Zip` | Text | nullable |

#### PurchaseOrderStatuses
|             |             |     |
|-------------|-------------|-----|
| `Closed_Flag` | Boolean | nullable |
| `Default_Closed_Flag` | Boolean |  |
| `Default_Flag` | Boolean | nullable |
| `Description` | Text | nullable |
| `Inactive_Flag` | Boolean | nullable |
| `Last_Update` | DateTime | nullable |
| `PO_Status_RecID` | Numeric |  |
| `Sort_Order` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### PurchaseOrderWithLineItems
|             |             |     |
|-------------|-------------|-----|
| `Backorder_Flag` | Boolean |  |
| `Date_Received` | DateTime | nullable |
| `Description` | Text | nullable |
| `Expected_Ship_Date` | DateTime | nullable |
| `IV_Item_RecID` | Numeric |  |
| `IV_Product_RecID` | Numeric | nullable |
| `Item_ID` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Line_Number` | Numeric | nullable |
| `PO_Number` | Text | nullable |
| `Purchase_Detail_RecID` | Numeric |  |
| `Purchase_Header_RecID` | Numeric |  |
| `Quantity` | Numeric | nullable |
| `Received` | Boolean |  |
| `Received_Qty` | Numeric | nullable |
| `Serialized_Flag` | Boolean | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Vendor_SKU` | Text | nullable |
| `itemunitcost` | Numeric | nullable |
| `itemuom` | Text | nullable |
| `received_status` | Text |  |
| `shipmethoddescription` | Text | nullable |
| `tracking_number` | Text | nullable |
| `tracking_url` | Text | nullable |

#### RMATag
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime |  |
| `Product_Description` | Text |  |
| `RMA_Tag_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### Release
|             |             |     |
|-------------|-------------|-----|
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric |  |
| `Eligible` | Boolean | nullable |
| `Market` | Text | nullable |
| `MarketID` | Numeric | nullable |
| `Territory` | Text | nullable |
| `TerritoryID` | Numeric | nullable |
| `Type` | Text | nullable |
| `TypeID` | Numeric | nullable |

#### ReleaseManager_Filters
|             |             |     |
|-------------|-------------|-----|
| `Description` | Text | nullable |
| `FilterName` | Text |  |
| `ID` | Numeric |  |

#### ReminderMinutes
|             |             |     |
|-------------|-------------|-----|
| `Default_Flag` | Boolean | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `ReminderDescription` | Text | nullable |
| `ReminderTimeId` | Numeric |  |
| `Reminder_Time` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### SICCode
|             |             |     |
|-------------|-------------|-----|
| `Description` | Text | nullable |
| `SIC_Category` | Text | nullable |
| `SIC_Code_ID` | Text |  |
| `SIC_Code_RecID` | Numeric |  |

#### SLA
|             |             |     |
|-------------|-------------|-----|
| `Application_Order` | Numeric | nullable |
| `Default_Flag` | Boolean | nullable |
| `Description` | Text | nullable |
| `Hours_Type_ID` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Office_Calendar_RecId` | Numeric | nullable |
| `ResPlan_Hours` | Numeric | nullable |
| `ResPlan_Pct` | Numeric | nullable |
| `Resolution_Hours` | Numeric | nullable |
| `Resolution_Pct` | Numeric | nullable |
| `Responded_Hours` | Numeric | nullable |
| `Responded_Pct` | Numeric | nullable |
| `SLA_Name` | Text | nullable |
| `SR_SLA_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### SLAPriority
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime |  |
| `ResPlan_Hours` | Numeric | nullable |
| `ResPlan_Pct` | Numeric | nullable |
| `Resolution_Hours` | Numeric | nullable |
| `Resolution_Pct` | Numeric | nullable |
| `Responded_Hours` | Numeric | nullable |
| `Responded_Pct` | Numeric | nullable |
| `SR_SLA_RecID` | Numeric |  |
| `SR_Urgency_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### SalesOrder
|             |             |     |
|-------------|-------------|-----|
| `Company_Address_RecID` | Numeric | nullable |
| `Company_RecID` | Numeric | nullable |
| `Contact_Recid` | Numeric | nullable |
| `Description` | Text | nullable |
| `Order_Date` | DateTime | nullable |
| `Order_Due_Date` | DateTime | nullable |
| `Order_Header_RecID` | Numeric |  |
| `Order_Status_RecID` | Numeric | nullable |
| `Total` | Numeric | nullable |

#### SalesOrderCustomFields
|             |             |     |
|-------------|-------------|-----|
| `Last_Update_UTC` | DateTime |  |
| `Order_Header_RecID` | Numeric |  |
| `Pod_RecID` | Numeric |  |
| `Purchase_Order_Number` | Text | nullable |
| `Updated_By` | Text |  |
| `User_Defined_Field_RecID` | Numeric |  |
| `User_Defined_Field_Value` | Text |  |
| `customfield_podID` | Text |  |
| `sales_order_customfield` | Text |  |
| `sales_order_fieldtype` | Text | nullable |

#### SalesOrderStatus
|             |             |     |
|-------------|-------------|-----|
| `Closed_Flag` | Boolean | nullable |
| `Default_Flag` | Boolean | nullable |
| `Description` | Text | nullable |
| `Inactive_Flag` | Boolean | nullable |
| `Last_Update` | DateTime | nullable |
| `Order_Status_RecID` | Numeric |  |
| `Sort_Order` | Numeric | nullable |
| `Updated_By` | Text | nullable |

#### Sales_Team
|             |             |     |
|-------------|-------------|-----|
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Member_ID` | Text | nullable |
| `Member_RecID` | Numeric | nullable |
| `Owner_Level_recid` | Numeric | nullable |
| `Sales_Team_ID` | Text |  |
| `Sales_Team_Member_RecID` | Numeric | nullable |
| `Sales_Team_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### Schedule
|             |             |     |
|-------------|-------------|-----|
| `Ack_Date` | DateTime | nullable |
| `Ack_Flag` | Boolean | nullable |
| `Ack_Member_RecID` | Numeric | nullable |
| `All_Day_Flag` | Boolean |  |
| `Close_Date` | DateTime | nullable |
| `Close_Member_RecID` | Numeric | nullable |
| `Date_Entered` | DateTime | nullable |
| `Date_Time_End` | DateTime | nullable |
| `Date_Time_End_UTC` | DateTime | nullable |
| `Date_Time_Start` | DateTime | nullable |
| `Date_Time_Start_UTC` | DateTime | nullable |
| `Display_Color` | Text | nullable |
| `Duration` | Numeric | nullable |
| `Entered_By_RecID` | Numeric | nullable |
| `Exchange_GUID` | Text | nullable |
| `Hours_Estimated` | Numeric | nullable |
| `Hours_Per_Day` | Numeric | nullable |
| `Hours_Sched` | Numeric | nullable |
| `Last_Sync` | DateTime | nullable |
| `Last_Update` | DateTime | nullable |
| `Location_Desc` | Text | nullable |
| `Member_ID` | Text | nullable |
| `Percent_Sched` | Numeric | nullable |
| `Priority` | Numeric | nullable |
| `RecID` | Numeric | nullable |
| `Reminder_Flag` | Boolean |  |
| `Reminder_Minutes` | Numeric | nullable |
| `Reminder_Time_Desc` | Text | nullable |
| `SR_Impact_Name` | Text | nullable |
| `SR_Service_RecID` | Numeric | nullable |
| `SR_Severity_Name` | Text | nullable |
| `Schedule_Desc` | Text | nullable |
| `Schedule_RecID` | Numeric |  |
| `Schedule_Status_RecID` | Numeric | nullable |
| `Schedule_Type_RecID` | Numeric |  |
| `Syncable` | Boolean |  |
| `System_Flag` | Boolean | nullable |
| `Table_Reference` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Xref_Mbr_RecID` | Numeric | nullable |
| `close_flag` | Boolean |  |

#### ScheduleLocation
|             |             |     |
|-------------|-------------|-----|
| `Default_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `LocationDescription` | Text | nullable |
| `LocationId` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ScheduleSpan
|             |             |     |
|-------------|-------------|-----|
| `SpanDescription` | Text | nullable |
| `SpanId` | Numeric |  |
| `SpanIdentifier` | Text |  |

#### ScheduleStatus
|             |             |     |
|-------------|-------------|-----|
| `Default_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `ScheduleStatusId` | Numeric |  |
| `StatusDescription` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ScheduleType
|             |             |     |
|-------------|-------------|-----|
| `Description` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `SR_Location_RecID` | Numeric | nullable |
| `Schedule_Type_ID` | Text | nullable |
| `Schedule_Type_RecID` | Numeric |  |
| `System_Flag` | Boolean |  |
| `TE_Charge_Code_RecID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ScreenConnectSession
|             |             |     |
|-------------|-------------|-----|
| `Config_RecID` | Numeric |  |
| `Member_RecID` | Numeric |  |
| `SR_Service_RecID` | Numeric |  |
| `ScreenConnect_Session_RecID` | Numeric |  |
| `Session_GUID` | Text |  |

#### ScreenLinkTableReference
|             |             |     |
|-------------|-------------|-----|
| `Screen_Link_Table_RecID` | Numeric |  |
| `Table_Reference` | Text |  |

#### Service
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric | nullable |
| `Address_Line1` | Text |  |
| `Address_Line2` | Text |  |
| `Age` | Numeric | nullable |
| `Approved` | Boolean |  |
| `Assigned_By_RecID` | Numeric | nullable |
| `Board_Name` | Text | nullable |
| `BusGroup` | Text | nullable |
| `City` | Text |  |
| `ClosedDesc` | Text |  |
| `Closed_Age` | Numeric | nullable |
| `Closed_Flag` | Boolean | nullable |
| `Country` | Text | nullable |
| `Date_Closed_UTC` | DateTime | nullable |
| `Date_Entered_UTC` | DateTime | nullable |
| `Date_Required` | DateTime | nullable |
| `Date_Resolved_UTC` | DateTime | nullable |
| `Date_Resplan_UTC` | DateTime | nullable |
| `Date_Responded_UTC` | DateTime | nullable |
| `Date_Status_Changed_UTC` | DateTime | nullable |
| `Detail_Description` | Text | nullable |
| `Escalation_Start_Date_UTC` | DateTime | nullable |
| `Est_Start_Date_UTC` | DateTime | nullable |
| `Hours_Actual` | Numeric | nullable |
| `Hours_Agreement` | Numeric | nullable |
| `Hours_Billable` | Numeric | nullable |
| `Hours_Budget` | Numeric | nullable |
| `Hours_Invoiced` | Numeric | nullable |
| `Hours_NonBillable` | Numeric | nullable |
| `Hours_Scheduled` | Numeric | nullable |
| `Impact` | Text | nullable |
| `Initial_Description` | Text | nullable |
| `Internal_Analysis` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Location` | Text | nullable |
| `Minutes_Before_Waiting` | Numeric | nullable |
| `Minutes_Waiting` | Numeric | nullable |
| `Opportunity_RecID` | Numeric | nullable |
| `Overall_Start_Date_UTC` | DateTime | nullable |
| `PM_Phase_RecID` | Numeric | nullable |
| `Parent` | Text | nullable |
| `PostalCode` | Text |  |
| `Previous_SR_Status_RecID` | Numeric | nullable |
| `Priority_Description` | Text | nullable |
| `Priority_Sort_Order` | Numeric | nullable |
| `Resolution` | Text | nullable |
| `Resolved_By` | Text | nullable |
| `Resolved_Minutes` | Numeric | nullable |
| `Resplan_Minutes` | Numeric | nullable |
| `Resplan_Skipped_Minutes` | Numeric | nullable |
| `Responded_By` | Text | nullable |
| `Responded_Minutes` | Numeric | nullable |
| `Responded_Skipped_Minutes` | Numeric | nullable |
| `SR_Billing_Method_ID` | Text | nullable |
| `SR_Billing_Method_RecID` | Numeric | nullable |
| `SR_Board_RecID` | Numeric | nullable |
| `SR_Impact_RecID` | Numeric | nullable |
| `SR_SLA_RecID` | Numeric | nullable |
| `SR_Service_RecID` | Numeric |  |
| `SR_Severity_RecID` | Numeric | nullable |
| `SR_Urgency_RecID` | Numeric | nullable |
| `ServiceBillingMethod` | Text | nullable |
| `ServiceSubType` | Text |  |
| `ServiceSubTypeItem` | Text |  |
| `ServiceType` | Text |  |
| `Severity` | Text | nullable |
| `Site_Name` | Text | nullable |
| `Source` | Text | nullable |
| `State` | Text |  |
| `Status_SortOrder` | Numeric | nullable |
| `SubTypeItem_RecID` | Numeric | nullable |
| `SubType_RecID` | Numeric | nullable |
| `Summary` | Text | nullable |
| `Territory` | Text | nullable |
| `Territory_Manager` | Text | nullable |
| `TicketNbr` | Numeric |  |
| `Ticket_Owner_First_Name` | Text | nullable |
| `Ticket_Owner_Last_Name` | Text | nullable |
| `Ticket_Owner_RecID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Type_RecID` | Numeric | nullable |
| `Updated_By` | Text | nullable |
| `Urgency` | Text | nullable |
| `Waiting_Flag` | Boolean | nullable |
| `agreement_name` | Text |  |
| `billing_unit_recid` | Numeric | nullable |
| `closed_by` | Text | nullable |
| `company_name` | Text | nullable |
| `company_recid` | Numeric | nullable |
| `config_recids` | Text | nullable |
| `contact_name` | Text | nullable |
| `contact_recid` | Numeric |  |
| `date_closed` | DateTime | nullable |
| `date_entered` | DateTime | nullable |
| `entered_by` | Text | nullable |
| `owner_level_recid` | Numeric | nullable |
| `resource_list` | Text | nullable |
| `service_location` | Text | nullable |
| `sr_status_recid` | Numeric |  |
| `status_description` | Text | nullable |
| `team_name` | Text |  |
| `territory_recid` | Numeric | nullable |

#### ServiceAudit
|             |             |     |
|-------------|-------------|-----|
| `Audit_Source` | Text | nullable |
| `Audit_Text` | Text | nullable |
| `Email_Address` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime | nullable |
| `SR_Audit_RecID` | Numeric |  |
| `TicketNbr` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ServiceBoard
|             |             |     |
|-------------|-------------|-----|
| `Activity_Class_RecID` | Numeric | nullable |
| `Activity_Type_RecID` | Numeric | nullable |
| `AdditionsLockTime_Flag` | Boolean | nullable |
| `Board_Name` | Text | nullable |
| `BusGroup` | Text | nullable |
| `EmailContact_Flag` | Boolean | nullable |
| `EmailResource_Flag` | Boolean | nullable |
| `ExpBillable_Flag` | Boolean | nullable |
| `ExpInvoice_Flag` | Boolean | nullable |
| `Inactive_Flag` | Boolean | nullable |
| `InternalAnalysis_Sort` | Text |  |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Location` | Text | nullable |
| `LockDesc_Flag` | Boolean | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `Problem_Sort` | Text |  |
| `ProdBillable_Flag` | Boolean | nullable |
| `ProdInvoice_Flag` | Boolean | nullable |
| `Project_Flag` | Boolean |  |
| `Resolution_Sort` | Text |  |
| `SR_Board_RecID` | Numeric |  |
| `SR_InternalAnalysis_Flag` | Boolean |  |
| `SR_Problem_Flag` | Boolean | nullable |
| `SR_Resolution_Flag` | Boolean |  |
| `TE_InternalAnalysis_Flag` | Boolean |  |
| `TE_Problem_Flag` | Boolean |  |
| `TE_Resolution_Flag` | Boolean |  |
| `TimeBillable_Flag` | Boolean | nullable |
| `TimeInvoice_Flag` | Boolean | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `billing_unit_recid` | Numeric | nullable |

#### ServiceBoardMembers
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime |  |
| `Member_RecID` | Numeric | nullable |
| `SR_BoardMbr_RecID` | Numeric |  |
| `SR_Board_RecID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ServiceCode
|             |             |     |
|-------------|-------------|-----|
| `Billing_Unit_RecID` | Numeric | nullable |
| `Last_Update` | DateTime | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `SR_Board_RecID` | Numeric | nullable |
| `SR_Code_RecID` | Numeric |  |
| `ServiceCodeDesc` | Text | nullable |
| `ServiceCodeName` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ServiceCustomFields
|             |             |     |
|-------------|-------------|-----|
| `Last_Update_UTC` | DateTime |  |
| `Pod_RecID` | Numeric |  |
| `SR_Service_RecID` | Numeric |  |
| `Summary` | Text | nullable |
| `Updated_By` | Text |  |
| `User_Defined_Field_RecID` | Numeric |  |
| `User_Defined_Field_Value` | Text |  |
| `customfield_podID` | Text |  |
| `service_customfield` | Text |  |
| `service_fieldtype` | Text | nullable |

#### ServiceItem
|             |             |     |
|-------------|-------------|-----|
| `Billing_Unit_RecID` | Numeric | nullable |
| `Board_Name` | Text | nullable |
| `BusGroup` | Text | nullable |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Location` | Text | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `SR_Board_RecID` | Numeric |  |
| `SR_SubTypeItem_RecID` | Numeric |  |
| `SR_SubType_RecID` | Numeric | nullable |
| `SR_Type_RecID` | Numeric | nullable |
| `ServiceItemDesc` | Text |  |
| `ServiceSubTypeDesc` | Text | nullable |
| `ServiceTypeDesc` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |

#### ServiceKPICountByHour
|             |             |     |
|-------------|-------------|-----|
| `Date_Entered_UTC` | DateTime | nullable |
| `Day_Entered_UTC` | DateTime | nullable |
| `Hour_Entered_UTC` | DateTime | nullable |
| `Hour_Nbr_UTC` | Numeric | nullable |
| `SR_Board_RecID` | Numeric | nullable |
| `TicketCount` | Numeric | nullable |

#### ServiceLocation
|             |             |     |
|-------------|-------------|-----|
| `Company_Address_RecID` | Numeric |  |
| `Company_RecID` | Numeric |  |
| `Inactive_Flag` | Boolean | nullable |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime |  |
| `ServiceLocation_Desc` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ServiceMetricsAging
|             |             |     |
|-------------|-------------|-----|
| `Age` | Numeric | nullable |
| `Age_Group` | Text |  |
| `Closed_Flag` | Boolean |  |
| `Past_Required_Date` | Numeric | nullable |
| `SR_Service_RecID` | Numeric |  |

#### ServiceMetricsCounts
|             |             |     |
|-------------|-------------|-----|
| `Closed_Flag` | Boolean |  |
| `Configuration_Count` | Numeric | nullable |
| `Resources_Remaining_Count` | Numeric | nullable |
| `SR_Service_RecID` | Numeric |  |
| `Time_Entry_Count` | Numeric | nullable |

#### ServiceNote
|             |             |     |
|-------------|-------------|-----|
| `Contact_RecID` | Numeric | nullable |
| `Created_By` | Text | nullable |
| `Date_Created_UTC` | DateTime | nullable |
| `Detail_Description_Flag` | Boolean |  |
| `Internal_Analysis_Flag` | Boolean |  |
| `Last_Update_UTC` | DateTime | nullable |
| `Member_RecID` | Numeric | nullable |
| `Notes` | Text | nullable |
| `RecID` | Numeric |  |
| `Resolution_Flag` | Boolean |  |
| `SR_Service_RecID` | Numeric | nullable |
| `Time_Flag` | Numeric |  |
| `Updated_By` | Text | nullable |

#### ServicePriority
|             |             |     |
|-------------|-------------|-----|
| `Color` | Text | nullable |
| `Default_Flag` | Boolean |  |
| `Image_Link` | Text | nullable |
| `Last_Update` | DateTime |  |
| `SR_Urgency_RecID` | Numeric |  |
| `Service_Priority_Desc` | Text | nullable |
| `Sort_Order` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ServiceSignoff
|             |             |     |
|-------------|-------------|-----|
| `Default_Flag` | Boolean |  |
| `SR_Signoff_Name` | Text |  |
| `SR_Signoff_RecID` | Numeric |  |

#### ServiceStatus
|             |             |     |
|-------------|-------------|-----|
| `Billing_Unit_RecID` | Numeric | nullable |
| `Board_Flag` | Boolean |  |
| `Board_Name` | Text | nullable |
| `Closed_Flag` | Boolean |  |
| `Customer_Portal_Flag` | Boolean | nullable |
| `Default_Flag` | Boolean |  |
| `Inactive_Flag` | Boolean | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `No_Time_Flag` | Boolean |  |
| `Owner_Level_RecID` | Numeric | nullable |
| `Project_Flag` | Boolean | nullable |
| `SR_Board_RecID` | Numeric | nullable |
| `SR_Status_RecID` | Numeric |  |
| `Service_Status_Desc` | Text | nullable |
| `Sort_Order` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ServiceSubType
|             |             |     |
|-------------|-------------|-----|
| `Billing_Unit_RecID` | Numeric | nullable |
| `Board_Name` | Text | nullable |
| `BusGroup` | Text | nullable |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Location` | Text | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `SR_Board_RecID` | Numeric |  |
| `SR_SubType_RecID` | Numeric |  |
| `SR_Type_RecID` | Numeric | nullable |
| `ServiceSubTypeDesc` | Text |  |
| `ServiceTypeDesc` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |

#### ServiceSubTypeItemTemplate
|             |             |     |
|-------------|-------------|-----|
| `Auto_Apply` | Boolean |  |
| `Last_Update_UTC` | DateTime |  |
| `SRT_Service_RecID` | Numeric | nullable |
| `SR_SubTypeItem_RecID` | Numeric | nullable |
| `SR_SubType_RecID` | Numeric |  |
| `SR_Type_RecID` | Numeric |  |
| `SR_Type_SubType_SubTypeItem_Template_RecID` | Numeric |  |

#### ServiceSubTypeItemTemplateOption
|             |             |     |
|-------------|-------------|-----|
| `Append_Flag` | Boolean |  |
| `Ignore_Flag` | Boolean |  |
| `Inactive_Flag` | Boolean |  |
| `Option_Name` | Text |  |
| `Overwrite_Flag` | Boolean |  |
| `SR_Type_SubType_SubTypeItem_Template_Option_RecID` | Numeric |  |
| `SR_Type_SubType_SubTypeItem_Template_RecID` | Numeric |  |

#### ServiceTask
|             |             |     |
|-------------|-------------|-----|
| `Assign_To_RecID` | Numeric | nullable |
| `Child_RecID` | Numeric | nullable |
| `Closed_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Notes` | Text | nullable |
| `Priority` | Numeric | nullable |
| `Resolution` | Text | nullable |
| `SR_Code_RecID` | Numeric | nullable |
| `SR_Service_RecID` | Numeric |  |
| `SR_Task_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `billing_sr` | Numeric | nullable |

#### ServiceTeam
|             |             |     |
|-------------|-------------|-----|
| `Billing_Unit_RecID` | Numeric |  |
| `Board_Name` | Text | nullable |
| `BusGroup` | Text | nullable |
| `Default_Flag` | Boolean |  |
| `DeleteNotify_Flag` | Boolean | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Location` | Text | nullable |
| `Owner_Level_RecID` | Numeric |  |
| `SR_Board_RecID` | Numeric | nullable |
| `SR_Team_RecID` | Numeric |  |
| `ServiceTeam` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ServiceTemplate
|             |             |     |
|-------------|-------------|-----|
| `Board_Name` | Text | nullable |
| `Internal_Analysis` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Problem` | Text | nullable |
| `SRT_Service_RecID` | Numeric |  |
| `SRT_Template_Name` | Text |  |
| `SR_Board_RecID` | Numeric |  |
| `SR_Type_RecID` | Numeric | nullable |
| `Summary` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ServiceTemplateTask
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Notes` | Text | nullable |
| `Parent_SRT_Task_RecID` | Numeric | nullable |
| `Priority` | Numeric | nullable |
| `SRT_Service_RecID` | Numeric |  |
| `SRT_Task_RecID` | Numeric |  |
| `SR_Code_RecID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### ServiceTicketNotesDocuments
|             |             |     |
|-------------|-------------|-----|
| `company_name` | Text | nullable |
| `docs_exist` | Numeric | nullable |
| `notes_exist` | Numeric |  |
| `resources` | Text | nullable |
| `status_name` | Text | nullable |
| `summary` | Text | nullable |
| `summary_updated` | Numeric |  |
| `ticket_recid` | Numeric |  |
| `urgency_color` | Text | nullable |
| `urgency_name` | Text | nullable |

#### ServiceType
|             |             |     |
|-------------|-------------|-----|
| `ActiveType` | Text | nullable |
| `Billing_Unit_RecID` | Numeric |  |
| `Board_Name` | Text | nullable |
| `BusGroup` | Text | nullable |
| `Default_Flag` | Boolean | nullable |
| `Inactive_Flag` | Boolean | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Location` | Text | nullable |
| `Owner_Level_RecID` | Numeric |  |
| `SR_Board_RecID` | Numeric | nullable |
| `SR_Type_RecID` | Numeric |  |
| `ServiceType` | Text |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |

#### Service_Open
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric | nullable |
| `Address_Line1` | Text |  |
| `Address_Line2` | Text |  |
| `Age` | Numeric | nullable |
| `Approved` | Boolean |  |
| `Assigned_By_RecID` | Numeric | nullable |
| `Board_Name` | Text | nullable |
| `BusGroup` | Text | nullable |
| `City` | Text |  |
| `Closed_Age` | Numeric | nullable |
| `Country` | Text |  |
| `Date_Entered_UTC` | DateTime | nullable |
| `Date_Required` | DateTime | nullable |
| `Date_Resolved_UTC` | DateTime | nullable |
| `Date_Resplan_UTC` | DateTime | nullable |
| `Date_Responded_UTC` | DateTime | nullable |
| `Date_Status_Changed_UTC` | DateTime | nullable |
| `Detail_Description` | Text | nullable |
| `Escalation_Start_Date_UTC` | DateTime | nullable |
| `Est_Start_Date_UTC` | DateTime | nullable |
| `Hours_Actual` | Numeric | nullable |
| `Hours_Agreement` | Numeric | nullable |
| `Hours_Billable` | Numeric | nullable |
| `Hours_Budget` | Numeric | nullable |
| `Hours_Invoiced` | Numeric | nullable |
| `Hours_NonBillable` | Numeric | nullable |
| `Hours_Scheduled` | Numeric | nullable |
| `Impact` | Text | nullable |
| `Initial_Description` | Text | nullable |
| `Internal_Analysis` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Location` | Text | nullable |
| `Minutes_Before_Waiting` | Numeric | nullable |
| `Minutes_Waiting` | Numeric | nullable |
| `Opportunity_RecID` | Numeric | nullable |
| `Overall_Start_Date_UTC` | DateTime | nullable |
| `PM_Phase_RecID` | Numeric | nullable |
| `Parent` | Text | nullable |
| `PostalCode` | Text |  |
| `Previous_SR_Status_RecID` | Numeric | nullable |
| `Priority_Description` | Text | nullable |
| `Priority_Sort_Order` | Numeric | nullable |
| `Resolution` | Text | nullable |
| `Resolved_By` | Text | nullable |
| `Resolved_Minutes` | Numeric | nullable |
| `Resplan_Minutes` | Numeric | nullable |
| `Resplan_Skipped_Minutes` | Numeric | nullable |
| `Responded_By` | Text | nullable |
| `Responded_Minutes` | Numeric | nullable |
| `Responded_Skipped_Minutes` | Numeric | nullable |
| `SR_Billing_Method_ID` | Text | nullable |
| `SR_Billing_Method_RecID` | Numeric | nullable |
| `SR_Board_RecID` | Numeric | nullable |
| `SR_Impact_RecID` | Numeric | nullable |
| `SR_SLA_RecID` | Numeric | nullable |
| `SR_Service_RecID` | Numeric |  |
| `SR_Severity_RecID` | Numeric | nullable |
| `SR_Urgency_RecID` | Numeric | nullable |
| `ServiceBillingMethod` | Text | nullable |
| `ServiceSubType` | Text |  |
| `ServiceSubTypeItem` | Text |  |
| `ServiceType` | Text |  |
| `Severity` | Text | nullable |
| `Site_Name` | Text | nullable |
| `Source` | Text | nullable |
| `State` | Text |  |
| `Status_Description` | Text | nullable |
| `Status_SortOrder` | Numeric | nullable |
| `SubTypeItem_RecID` | Numeric | nullable |
| `SubType_RecID` | Numeric | nullable |
| `Summary` | Text | nullable |
| `Territory` | Text | nullable |
| `Territory_Manager` | Text | nullable |
| `TicketNbr` | Numeric |  |
| `Ticket_Owner_First_Name` | Text | nullable |
| `Ticket_Owner_Last_Name` | Text | nullable |
| `Ticket_Owner_RecID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Type_RecID` | Numeric | nullable |
| `Updated_By` | Text | nullable |
| `Urgency` | Text | nullable |
| `Waiting_Flag` | Boolean | nullable |
| `agreement_name` | Text |  |
| `billing_unit_recid` | Numeric | nullable |
| `closed_by` | Text | nullable |
| `company_name` | Text | nullable |
| `company_recid` | Numeric | nullable |
| `config_recids` | Text | nullable |
| `contact_name` | Text | nullable |
| `contact_recid` | Numeric |  |
| `date_entered` | DateTime | nullable |
| `entered_by` | Text | nullable |
| `owner_level_recid` | Numeric | nullable |
| `resource_list` | Text | nullable |
| `service_location` | Text | nullable |
| `sr_status_recid` | Numeric |  |
| `team_name` | Text |  |
| `territory_recid` | Numeric | nullable |

#### Service_SLA
|             |             |     |
|-------------|-------------|-----|
| `Closed_Flag` | Boolean |  |
| `Date_Resolved_UTC` | DateTime | nullable |
| `Date_Resplan_UTC` | DateTime | nullable |
| `Date_Responded_UTC` | DateTime | nullable |
| `Expected_Resolution_Expiration_Date` | DateTime | nullable |
| `Expected_Resolution_Expiration_Date_UTC` | DateTime | nullable |
| `Expected_Resplan_Expiration_Date` | DateTime | nullable |
| `Expected_Resplan_Expiration_Date_UTC` | DateTime | nullable |
| `Expected_Responded_Expiration_Date` | DateTime | nullable |
| `Expected_Responded_Expiration_Date_UTC` | DateTime | nullable |
| `Last_Update` | DateTime |  |
| `Min_Expected_Expiration_Date` | DateTime | nullable |
| `Min_Expected_Expiration_Date_UTC` | DateTime | nullable |
| `Minutes_Waiting` | Numeric |  |
| `Office_Calendar_RecID` | Numeric | nullable |
| `ResPlan_Hours` | Numeric | nullable |
| `Resolution_Hours` | Numeric | nullable |
| `Resolved_By` | Text | nullable |
| `Resolved_Minutes` | Numeric |  |
| `Resplan_BY` | Text | nullable |
| `Resplan_Minutes` | Numeric |  |
| `Responded_By` | Text | nullable |
| `Responded_Hours` | Numeric | nullable |
| `Responded_Minutes` | Numeric |  |
| `SLA_Name` | Text | nullable |
| `SLA_Status_Text` | Text | nullable |
| `SR_SLA_RecID` | Numeric |  |
| `SR_Service_RecID` | Numeric |  |
| `SR_Status_RecID` | Numeric |  |
| `Summary` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### Service_Source
|             |             |     |
|-------------|-------------|-----|
| `Date_Entered_UTC` | DateTime |  |
| `Default_Flag` | Boolean |  |
| `Entered_By` | Text |  |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime |  |
| `SR_Source_RecID` | Numeric |  |
| `Service_Source_Desc` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### Service_Summary
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric | nullable |
| `Address_Line1` | Text |  |
| `Address_Line2` | Text |  |
| `Age` | Numeric | nullable |
| `Approved` | Boolean |  |
| `Assigned_By_RecID` | Numeric | nullable |
| `Board_Name` | Text | nullable |
| `BusGroup` | Text | nullable |
| `City` | Text |  |
| `ClosedDesc` | Text |  |
| `Closed_Age` | Numeric | nullable |
| `Closed_Flag` | Boolean | nullable |
| `Country` | Text |  |
| `Date_Closed_UTC` | DateTime | nullable |
| `Date_Entered_UTC` | DateTime | nullable |
| `Date_Required` | DateTime | nullable |
| `Date_Resolved_UTC` | DateTime | nullable |
| `Date_Resplan_UTC` | DateTime | nullable |
| `Date_Responded_UTC` | DateTime | nullable |
| `Date_Status_Changed_UTC` | DateTime | nullable |
| `Escalation_Start_Date_UTC` | DateTime | nullable |
| `Est_Start_Date_UTC` | DateTime | nullable |
| `Hours_Actual` | Numeric | nullable |
| `Hours_Agreement` | Numeric | nullable |
| `Hours_Billable` | Numeric | nullable |
| `Hours_Budget` | Numeric | nullable |
| `Hours_Invoiced` | Numeric | nullable |
| `Hours_NonBillable` | Numeric | nullable |
| `Hours_Scheduled` | Numeric | nullable |
| `Impact` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime | nullable |
| `Location` | Text | nullable |
| `Minutes_Before_Waiting` | Numeric |  |
| `Minutes_Waiting` | Numeric |  |
| `Opportunity_RecID` | Numeric | nullable |
| `Overall_Start_Date_UTC` | DateTime | nullable |
| `PM_Phase_RecID` | Numeric | nullable |
| `Parent` | Text | nullable |
| `PostalCode` | Text |  |
| `Previous_SR_Status_RecID` | Numeric | nullable |
| `Priority_Description` | Text | nullable |
| `Priority_Sort_Order` | Numeric | nullable |
| `Resolved_By` | Text | nullable |
| `Resolved_Minutes` | Numeric |  |
| `Resplan_Minutes` | Numeric |  |
| `Resplan_Skipped_Minutes` | Numeric |  |
| `Responded_By` | Text | nullable |
| `Responded_Minutes` | Numeric |  |
| `Responded_Skipped_Minutes` | Numeric |  |
| `SR_Billing_Method_ID` | Text | nullable |
| `SR_Billing_Method_RecID` | Numeric | nullable |
| `SR_Board_RecID` | Numeric | nullable |
| `SR_Impact_RecID` | Numeric | nullable |
| `SR_SLA_RecID` | Numeric | nullable |
| `SR_Service_RecID` | Numeric |  |
| `SR_Severity_RecID` | Numeric | nullable |
| `SR_Urgency_RecID` | Numeric | nullable |
| `ServiceBillingMethod` | Text | nullable |
| `ServiceSubType` | Text |  |
| `ServiceSubTypeItem` | Text |  |
| `ServiceType` | Text |  |
| `Severity` | Text | nullable |
| `Site_Name` | Text | nullable |
| `Source` | Text | nullable |
| `State` | Text |  |
| `Status_SortOrder` | Numeric | nullable |
| `SubTypeItem_RecID` | Numeric | nullable |
| `SubType_RecID` | Numeric | nullable |
| `Summary` | Text | nullable |
| `Territory` | Text | nullable |
| `Territory_Manager` | Text | nullable |
| `TicketNbr` | Numeric |  |
| `Ticket_Owner_First_Name` | Text | nullable |
| `Ticket_Owner_Last_Name` | Text | nullable |
| `Ticket_Owner_RecID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Type_RecID` | Numeric | nullable |
| `Updated_By` | Text | nullable |
| `Urgency` | Text | nullable |
| `Waiting_Flag` | Boolean |  |
| `agreement_name` | Text |  |
| `billing_unit_recid` | Numeric | nullable |
| `closed_by` | Text | nullable |
| `company_name` | Text | nullable |
| `company_recid` | Numeric | nullable |
| `config_recids` | Text | nullable |
| `contact_name` | Text | nullable |
| `contact_recid` | Numeric |  |
| `date_closed` | DateTime | nullable |
| `date_entered` | DateTime | nullable |
| `entered_by` | Text | nullable |
| `owner_level_recid` | Numeric | nullable |
| `resource_list` | Text | nullable |
| `service_location` | Text | nullable |
| `sr_status_recid` | Numeric |  |
| `status_description` | Text | nullable |
| `team_name` | Text |  |
| `territory_recid` | Numeric | nullable |

#### Service_Summary_Open
|             |             |     |
|-------------|-------------|-----|
| `AGE` | Numeric | nullable |
| `AGR_Header_RecID` | Numeric | nullable |
| `Address_Line1` | Text |  |
| `Address_Line2` | Text |  |
| `Approved` | Boolean |  |
| `Assigned_By_RecID` | Numeric | nullable |
| `Board_Name` | Text | nullable |
| `BusGroup` | Text | nullable |
| `City` | Text |  |
| `Closed_Age` | Numeric | nullable |
| `Country` | Text |  |
| `Date_Closed_UTC` | DateTime | nullable |
| `Date_Entered_UTC` | DateTime | nullable |
| `Date_Required` | DateTime | nullable |
| `Date_Resolved_UTC` | DateTime | nullable |
| `Date_Resplan_UTC` | DateTime | nullable |
| `Date_Responded_UTC` | DateTime | nullable |
| `Date_Status_Changed_UTC` | DateTime | nullable |
| `Escalation_Start_Date_UTC` | DateTime | nullable |
| `Est_Start_Date_UTC` | DateTime | nullable |
| `Hours_Actual` | Numeric | nullable |
| `Hours_Agreement` | Numeric | nullable |
| `Hours_Billable` | Numeric | nullable |
| `Hours_Budget` | Numeric | nullable |
| `Hours_Invoiced` | Numeric | nullable |
| `Hours_NonBillable` | Numeric | nullable |
| `Hours_Scheduled` | Numeric | nullable |
| `Impact` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime | nullable |
| `Location` | Text | nullable |
| `Minutes_Before_Waiting` | Numeric |  |
| `Minutes_Waiting` | Numeric |  |
| `Opportunity_RecID` | Numeric | nullable |
| `Overall_Start_Date_UTC` | DateTime | nullable |
| `PM_Phase_RecID` | Numeric | nullable |
| `Parent` | Text | nullable |
| `PostalCode` | Text |  |
| `Previous_SR_Status_RecID` | Numeric | nullable |
| `Priority_Description` | Text | nullable |
| `Priority_Sort_Order` | Numeric | nullable |
| `Resolved_By` | Text | nullable |
| `Resolved_Minutes` | Numeric |  |
| `Resplan_Minutes` | Numeric |  |
| `Resplan_Skipped_Minutes` | Numeric |  |
| `Responded_By` | Text | nullable |
| `Responded_Minutes` | Numeric |  |
| `Responded_Skipped_Minutes` | Numeric |  |
| `SR_Billing_Method_ID` | Text | nullable |
| `SR_Billing_Method_RecID` | Numeric | nullable |
| `SR_Board_RecID` | Numeric | nullable |
| `SR_Impact_RecID` | Numeric | nullable |
| `SR_SLA_RecID` | Numeric | nullable |
| `SR_Service_RecID` | Numeric |  |
| `SR_Severity_RecID` | Numeric | nullable |
| `SR_Urgency_RecID` | Numeric | nullable |
| `ServiceBillingMethod` | Text | nullable |
| `ServiceSubType` | Text |  |
| `ServiceSubTypeItem` | Text |  |
| `ServiceType` | Text |  |
| `Severity` | Text | nullable |
| `Site_Name` | Text | nullable |
| `Source` | Text | nullable |
| `State` | Text |  |
| `Status_Description` | Text | nullable |
| `Status_SortOrder` | Numeric | nullable |
| `SubTypeItem_RecID` | Numeric | nullable |
| `SubType_RecID` | Numeric | nullable |
| `Summary` | Text | nullable |
| `Territory` | Text | nullable |
| `Territory_Manager` | Text | nullable |
| `TicketNbr` | Numeric |  |
| `Ticket_Owner_First_Name` | Text | nullable |
| `Ticket_Owner_Last_Name` | Text | nullable |
| `Ticket_Owner_RecID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Type_RecID` | Numeric | nullable |
| `Updated_By` | Text | nullable |
| `Urgency` | Text | nullable |
| `Waiting_Flag` | Boolean |  |
| `agreement_name` | Text |  |
| `billing_unit_recid` | Numeric | nullable |
| `closed_by` | Text | nullable |
| `company_name` | Text | nullable |
| `company_recid` | Numeric | nullable |
| `config_recids` | Text | nullable |
| `contact_name` | Text | nullable |
| `contact_recid` | Numeric |  |
| `date_entered` | DateTime | nullable |
| `entered_by` | Text | nullable |
| `owner_level_recid` | Numeric | nullable |
| `resource_list` | Text | nullable |
| `service_location` | Text | nullable |
| `sr_status_recid` | Numeric |  |
| `team_name` | Text |  |
| `territory_recid` | Numeric | nullable |

#### ShipmentMethod
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `ShipMethodDescription` | Text | nullable |
| `ShipmentMethod_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |

#### States
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `State_Desc` | Text | nullable |
| `State_ID` | Text |  |
| `State_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### Surveys
|             |             |     |
|-------------|-------------|-----|
| `ClosedBy` | Text | nullable |
| `Comments` | Text | nullable |
| `CompanyName` | Text | nullable |
| `ContactMe` | Text | nullable |
| `Email` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Points` | Numeric |  |
| `Possible_Points` | Numeric | nullable |
| `Score` | Numeric | nullable |
| `SurveyName` | Text | nullable |
| `SurveyQtr` | Numeric | nullable |
| `SurveyYr` | Numeric | nullable |
| `Ticket` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `resources` | Text | nullable |

#### SurveysByTicket
|             |             |     |
|-------------|-------------|-----|
| `Closed_Flag` | Boolean |  |
| `Date_Completed` | DateTime | nullable |
| `Date_Sent` | DateTime | nullable |
| `Rec_Type` | Text |  |
| `SR_Service_RecID` | Numeric |  |
| `Score_Avg` | Numeric |  |
| `Score_Max` | Numeric |  |
| `Score_Min` | Numeric |  |
| `Surveys_Completed` | Numeric |  |
| `Surveys_Sent` | Numeric |  |
| `Total_Points` | Numeric |  |
| `Total_Possible_Points` | Numeric |  |

#### SystemMenus
|             |             |     |
|-------------|-------------|-----|
| `description` | Text |  |
| `favorites_flag` | Boolean |  |
| `menu_id` | Text |  |
| `sort_order` | Numeric | nullable |
| `system_menus_recid` | Numeric |  |

#### TaxCode
|             |             |     |
|-------------|-------------|-----|
| `Agency2_Xref` | Text | nullable |
| `Agency3_Xref` | Text | nullable |
| `Agency4_Xref` | Text | nullable |
| `Agency5_Xref` | Text | nullable |
| `Agency6_Xref` | Text | nullable |
| `Agency_Xref` | Text | nullable |
| `City_Max` | Numeric | nullable |
| `City_Rate` | Numeric | nullable |
| `City_Xref` | Text | nullable |
| `CodeCaption` | Text | nullable |
| `Country_RecID` | Numeric | nullable |
| `County_Max` | Numeric | nullable |
| `County_Rate` | Numeric | nullable |
| `County_Xref` | Text | nullable |
| `Date_Cancel` | DateTime | nullable |
| `Date_Effective` | DateTime | nullable |
| `Default_Flag` | Boolean |  |
| `DisplayDetail_Flag` | Boolean | nullable |
| `Last_Update` | DateTime |  |
| `LevelCaption` | Text | nullable |
| `LevelCaption2` | Text | nullable |
| `LevelCaption3` | Text | nullable |
| `LevelCaption4` | Text | nullable |
| `LevelCaption5` | Text | nullable |
| `LevelCaption6` | Text | nullable |
| `PiggyBack_Flag` | Boolean | nullable |
| `SingleUnitMax` | Numeric | nullable |
| `SingleUnitMax2` | Numeric | nullable |
| `SingleUnitMax3` | Numeric | nullable |
| `SingleUnitMax4` | Numeric | nullable |
| `SingleUnitMax5` | Numeric | nullable |
| `SingleUnitMax6` | Numeric | nullable |
| `SingleUnitMin` | Numeric | nullable |
| `SingleUnitMin2` | Numeric | nullable |
| `SingleUnitMin3` | Numeric | nullable |
| `SingleUnitMin4` | Numeric | nullable |
| `SingleUnitMin5` | Numeric | nullable |
| `SingleUnitMin6` | Numeric | nullable |
| `SingleUnit_Flag` | Boolean | nullable |
| `SingleUnit_Flag2` | Boolean | nullable |
| `SingleUnit_Flag3` | Boolean | nullable |
| `SingleUnit_Flag4` | Boolean | nullable |
| `SingleUnit_Flag5` | Boolean | nullable |
| `SingleUnit_Flag6` | Boolean | nullable |
| `State_ID` | Numeric | nullable |
| `State_Max` | Numeric | nullable |
| `State_Rate` | Numeric | nullable |
| `State_Xref` | Text | nullable |
| `Tax4_Max` | Numeric | nullable |
| `Tax4_Rate` | Numeric | nullable |
| `Tax4_Xref` | Text | nullable |
| `Tax5_Max` | Numeric | nullable |
| `Tax5_Rate` | Numeric | nullable |
| `Tax5_Xref` | Text | nullable |
| `Tax6_Rate` | Numeric | nullable |
| `Tax6_Xref` | Text | nullable |
| `TaxExpenses2_Flag` | Boolean | nullable |
| `TaxExpenses3_Flag` | Boolean | nullable |
| `TaxExpenses4_Flag` | Boolean | nullable |
| `TaxExpenses5_Flag` | Boolean | nullable |
| `TaxExpenses6_Flag` | Boolean | nullable |
| `TaxExpenses_Flag` | Boolean | nullable |
| `TaxProducts2_Flag` | Boolean | nullable |
| `TaxProducts3_Flag` | Boolean | nullable |
| `TaxProducts4_Flag` | Boolean | nullable |
| `TaxProducts5_Flag` | Boolean | nullable |
| `TaxProducts6_Flag` | Boolean | nullable |
| `TaxProducts_Flag` | Boolean | nullable |
| `TaxRateType` | Text | nullable |
| `TaxRateType2` | Text | nullable |
| `TaxRateType3` | Text | nullable |
| `TaxRateType4` | Text | nullable |
| `TaxRateType5` | Text | nullable |
| `TaxRateType6` | Text | nullable |
| `TaxServices2_Flag` | Boolean | nullable |
| `TaxServices3_Flag` | Boolean | nullable |
| `TaxServices4_Flag` | Boolean | nullable |
| `TaxServices5_Flag` | Boolean | nullable |
| `TaxServices6_Flag` | Boolean | nullable |
| `TaxServices_Flag` | Boolean | nullable |
| `Tax_Code_Desc` | Text | nullable |
| `Tax_Code_ID` | Text | nullable |
| `Tax_Code_RecID` | Numeric |  |
| `Tax_Code_Xref` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### TeamRole
|             |             |     |
|-------------|-------------|-----|
| `Last_Update` | DateTime | nullable |
| `Role_Desc` | Text | nullable |
| `Team_Role_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### TicketAudit
|             |             |     |
|-------------|-------------|-----|
| `Affected_Record` | Text | nullable |
| `Audit_Source_ID` | Text | nullable |
| `Audit_SubType` | Text | nullable |
| `Audit_Text` | Text | nullable |
| `Audit_Type` | Text | nullable |
| `Created_By` | Text |  |
| `Date_Entered_UTC` | DateTime |  |
| `Locale_RecId` | Numeric | nullable |
| `New_Value` | Text | nullable |
| `Old_Value` | Text | nullable |
| `SR_Service_Audit_RecID` | Numeric |  |
| `SR_Service_RecID` | Numeric |  |

#### Time
|             |             |     |
|-------------|-------------|-----|
| `AGR_Header_RecID` | Numeric | nullable |
| `Activity_Subject` | Text | nullable |
| `Actual_Utilized_Hrs` | Numeric | nullable |
| `AgrAdj_Firm` | Numeric | nullable |
| `AgrAdj_Total` | Numeric |  |
| `AgrAmtCovered` | Numeric |  |
| `AgrHrsCovered` | Numeric |  |
| `Agreement` | Text |  |
| `Billable_Amt` | Numeric | nullable |
| `Billable_Hrs` | Numeric | nullable |
| `Billable_Utilized_Hrs` | Numeric | nullable |
| `Billing_Log_RecID` | Numeric | nullable |
| `Billing_Unit_RecID` | Numeric | nullable |
| `BusGroup` | Text | nullable |
| `Charge_Code` | Text | nullable |
| `Company_RecID` | Numeric |  |
| `Date_Start` | DateTime | nullable |
| `Hourly_Cost` | Text | nullable |
| `Hourly_Cost_Decimal` | Numeric | nullable |
| `Hourly_Rate` | Numeric | nullable |
| `InvAdj_Firm` | Numeric | nullable |
| `InvAdj_Total` | Numeric |  |
| `Invoice_Number` | Text | nullable |
| `Invoice_Ready` | Numeric |  |
| `Last_Update` | DateTime | nullable |
| `Last_Update_UTC` | DateTime | nullable |
| `Location` | Text | nullable |
| `NonBillable_Amt` | Numeric | nullable |
| `NonBillable_Hrs` | Numeric | nullable |
| `Notes` | Text | nullable |
| `Opportunity_RecID` | Numeric | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `PM_Project_RecID` | Numeric |  |
| `Project_Activity` | Text | nullable |
| `Project_Phase` | Text | nullable |
| `SO_Activity_RecID` | Numeric | nullable |
| `SR_Service_RecID` | Numeric |  |
| `TE_Charge_Code_RecID` | Numeric | nullable |
| `Territory` | Text | nullable |
| `Time_End_UTC` | DateTime | nullable |
| `Time_RecID` | Numeric |  |
| `Time_Sheet_RecID` | Numeric | nullable |
| `Time_Start_UTC` | DateTime | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Utilization_Flag` | Boolean | nullable |
| `billable_flag` | Boolean |  |
| `charge_to` | Text | nullable |
| `company_name` | Text | nullable |
| `date_entered_utc` | DateTime |  |
| `date_invoice` | DateTime | nullable |
| `first_name` | Text | nullable |
| `hours_actual` | Numeric |  |
| `internal_note` | Text | nullable |
| `invoice_flag` | Boolean |  |
| `last_name` | Text | nullable |
| `member_id` | Text |  |
| `member_recid` | Numeric | nullable |
| `option_id` | Text | nullable |
| `project_name` | Text | nullable |
| `sr_status` | Text | nullable |
| `sr_summary` | Text | nullable |
| `te_status_id` | Numeric | nullable |
| `time_end` | DateTime | nullable |
| `time_start` | DateTime | nullable |
| `time_status` | Text | nullable |
| `work_role` | Text | nullable |
| `work_type` | Text | nullable |

#### TimeAudit
|             |             |     |
|-------------|-------------|-----|
| `Audit_Source_ID` | Text | nullable |
| `Audit_Text` | Text | nullable |
| `Audit_Type` | Text | nullable |
| `Created_By` | Text | nullable |
| `Date_Entered_UTC` | DateTime |  |
| `Locale_RecID` | Numeric | nullable |
| `New_Value` | Text | nullable |
| `Old_Value` | Text | nullable |
| `Time_Audit_RecID` | Numeric |  |
| `Time_RecID` | Numeric | nullable |

#### TimeEntryCustomFields
|             |             |     |
|-------------|-------------|-----|
| `Last_Update_UTC` | DateTime |  |
| `Pod_RecID` | Numeric |  |
| `Time_RecID` | Numeric |  |
| `Time_Sheet_RecID` | Numeric | nullable |
| `Updated_By` | Text |  |
| `User_Defined_Field_RecID` | Numeric |  |
| `User_Defined_Field_Value` | Text |  |
| `customfield_podID` | Text |  |
| `time_entry_customfield` | Text |  |
| `time_entry_fieldtype` | Text | nullable |

#### TimeSheetAudit
|             |             |     |
|-------------|-------------|-----|
| `Audit_Text` | Text | nullable |
| `Date_Audit_UTC` | DateTime |  |
| `Date_End` | DateTime | nullable |
| `Date_Start` | DateTime | nullable |
| `Member_Identifier` | Text |  |
| `Member_Name` | Text | nullable |
| `Submitted_By` | Text | nullable |
| `Time_Audit_RecID` | Numeric |  |
| `Time_Sheet_RecID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |

#### TimeSheets
|             |             |     |
|-------------|-------------|-----|
| `Date_DeadLine` | DateTime |  |
| `Date_End` | DateTime |  |
| `Date_Start` | DateTime |  |
| `Description` | Text | nullable |
| `Last_Updated_UTC` | DateTime |  |
| `Member_ID` | Text |  |
| `Member_RecID` | Numeric | nullable |
| `Period` | Numeric |  |
| `TE_Period_RecID` | Numeric |  |
| `TE_Status_ID` | Numeric | nullable |
| `Time_Sheet_RecID` | Numeric |  |

#### TimeStatus
|             |             |     |
|-------------|-------------|-----|
| `Action` | Text | nullable |
| `Description` | Text | nullable |
| `TE_Status_ID` | Numeric | nullable |
| `TE_Status_RecID` | Numeric |  |

#### TimeZone
|             |             |     |
|-------------|-------------|-----|
| `Default_Flag` | Boolean |  |
| `End_Date_UTC` | DateTime | nullable |
| `Hours_Offset` | Numeric |  |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Start_Date_UTC` | DateTime | nullable |
| `Time_Zone` | Text | nullable |
| `Time_Zone_Name` | Text |  |
| `Time_Zone_RecID` | Numeric |  |
| `Updated_By` | Text | nullable |

#### Track
|             |             |     |
|-------------|-------------|-----|
| `Description` | Text |  |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `WF_Track_Header_RecID` | Numeric |  |

#### Transaction
|             |             |     |
|-------------|-------------|-----|
| `Activity_Summary` | Text | nullable |
| `Balance` | Text | nullable |
| `Billing_Log_RecID` | Numeric |  |
| `CR_Amount` | Numeric | nullable |
| `DR_Amount` | Numeric | nullable |
| `EX_Type_RecID` | Numeric | nullable |
| `Ex_Type_Desc` | Text | nullable |
| `GL_Account` | Text | nullable |
| `GL_BatchID` | Text | nullable |
| `GL_BatchID_RecID` | Numeric | nullable |
| `GL_COGS` | Text | nullable |
| `GL_Cost` | Numeric | nullable |
| `GL_Description` | Text | nullable |
| `GL_Entry_RecID` | Numeric |  |
| `GL_Inventory` | Text | nullable |
| `GL_Item` | Text | nullable |
| `GL_SalesCode` | Text | nullable |
| `GL_Type_ID` | Text |  |
| `Invoice_Number` | Text | nullable |
| `Item_Taxable_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Notes` | Text | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `PM_Phase_Desc` | Text | nullable |
| `PM_Phase_RecID` | Numeric | nullable |
| `PM_Project_RecID` | Numeric | nullable |
| `Packing_Slip` | Text | nullable |
| `Project_ID` | Text | nullable |
| `Quantity` | Numeric |  |
| `SO_Activity_RecID` | Numeric | nullable |
| `SR_Service_RecID` | Numeric | nullable |
| `Segment1` | Text | nullable |
| `Segment10` | Text | nullable |
| `Segment2` | Text | nullable |
| `Segment3` | Text | nullable |
| `Segment4` | Text | nullable |
| `Segment5` | Text | nullable |
| `Segment6` | Text | nullable |
| `Segment7` | Text | nullable |
| `Segment8` | Text | nullable |
| `Segment9` | Text | nullable |
| `Service_Summary` | Text | nullable |
| `Table_Reference` | Text | nullable |
| `Taxable2_Flag` | Boolean | nullable |
| `Taxable3_Flag` | Boolean | nullable |
| `Taxable4_Flag` | Boolean | nullable |
| `Taxable5_Flag` | Boolean | nullable |
| `Taxable6_Flag` | Boolean | nullable |
| `Taxable_Flag` | Boolean | nullable |
| `Time_RecID` | Numeric | nullable |
| `Updated_By` | Text |  |
| `iv_product_recid` | Numeric | nullable |
| `product_desc` | Text | nullable |

#### UnpostedExpense
|             |             |     |
|-------------|-------------|-----|
| `ChargeDescription` | Text | nullable |
| `Classification` | Text | nullable |
| `CompanyName` | Text | nullable |
| `Company_RecID` | Numeric | nullable |
| `Credit_Account` | Text | nullable |
| `Currency_Name` | Text | nullable |
| `Currency_RecID` | Numeric | nullable |
| `Currency_Symbol` | Text | nullable |
| `Date_Expense` | DateTime | nullable |
| `EX_Payment_RecID` | Numeric | nullable |
| `Ex_Type_RecID` | Numeric | nullable |
| `Expense_Type` | Text | nullable |
| `GL_Account` | Text | nullable |
| `GL_Amount` | Numeric | nullable |
| `GL_Description` | Text | nullable |
| `GL_Entry_RecID` | Numeric |  |
| `InPolicy` | Numeric |  |
| `Last_Update` | DateTime |  |
| `Member_ID` | Text | nullable |
| `Member_Name` | Text | nullable |
| `Owner_Level_Name` | Text | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `PaymentMethod` | Text | nullable |
| `RecID` | Numeric |  |
| `Updated_By` | Text |  |

#### UnpostedInvoice
|             |             |     |
|-------------|-------------|-----|
| `Company_Name` | Text | nullable |
| `Company_RecID` | Numeric |  |
| `CreatedBy` | Text | nullable |
| `CurrencySymbol` | Text | nullable |
| `Currency_Name` | Text |  |
| `Currency_RecID` | Numeric |  |
| `Date_Invoice` | DateTime | nullable |
| `Department` | Text | nullable |
| `GL_Account` | Text | nullable |
| `GL_Amount` | Numeric | nullable |
| `GL_Description` | Text | nullable |
| `GL_Entry_RecID` | Numeric |  |
| `InvoiceType` | Text | nullable |
| `Invoice_Number` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Owner_Level_Name` | Text | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `RecID` | Numeric |  |
| `Updated_By` | Text |  |

#### UnpostedProcurement
|             |             |     |
|-------------|-------------|-----|
| `CurrencyId` | Numeric |  |
| `CurrencyName` | Text | nullable |
| `CurrencySymbol` | Text | nullable |
| `Date` | DateTime | nullable |
| `GL_Amount` | Numeric | nullable |
| `GL_Description` | Text | nullable |
| `GL_Entry_RecID` | Numeric |  |
| `LastUpdate` | DateTime |  |
| `Owner_Level_Name` | Text | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `RecID` | Text | nullable |
| `RecType` | Text |  |
| `UpdatedBy` | Text |  |
| `Vendor_Invoice_Date` | DateTime | nullable |
| `Vendor_Invoice_Number` | Text | nullable |
| `Vendor_Name` | Text | nullable |
| `Vendor_RecID` | Numeric | nullable |

#### UserDefinedEntryType
|             |             |     |
|-------------|-------------|-----|
| `SF_Entry_Name` | Text | nullable |
| `SF_Entry_Type_ID` | Text |  |
| `SF_Entry_Type_RecID` | Numeric |  |

#### UserDefinedField
|             |             |     |
|-------------|-------------|-----|
| `Button_Url` | Text | nullable |
| `Caption` | Text |  |
| `Created_By` | Text |  |
| `Date_Created_UTC` | DateTime |  |
| `Full_View_Sort_Order` | Numeric |  |
| `Full_View_Visible_Flag` | Boolean |  |
| `Inactive_Flag` | Boolean |  |
| `Last_Update_UTC` | DateTime |  |
| `Multiline_Flag` | Boolean |  |
| `Multiline_Order` | Numeric | nullable |
| `Nbr_Decimals` | Numeric | nullable |
| `PodId` | Numeric |  |
| `Read_Only_Flag` | Boolean |  |
| `Required_Flag` | Boolean |  |
| `SF_Entry_TypeIdentifier` | Text |  |
| `SF_Field_TypeIdentifier` | Text |  |
| `ScreenIdentifier` | Text |  |
| `Time_Zone` | Text | nullable |
| `Tooltip` | Text | nullable |
| `Updated_By` | Text |  |
| `User_Defined_Field_RecID` | Numeric |  |

#### UserDefinedFieldBillingUnits
|             |             |     |
|-------------|-------------|-----|
| `Billing_Unit_RecID` | Numeric |  |
| `Last_Update_UTC` | DateTime |  |
| `Updated_By` | Text |  |
| `User_Defined_Field_Billing_Unit_RecID` | Numeric |  |
| `User_Defined_Field_RecID` | Numeric |  |

#### UserDefinedFieldOption
|             |             |     |
|-------------|-------------|-----|
| `Default_Flag` | Boolean |  |
| `Last_Update_UTC` | DateTime |  |
| `Sort_Order` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text |  |
| `User_Defined_Field_Option` | Text |  |
| `User_Defined_Field_Option_RecID` | Numeric |  |
| `User_Defined_Field_RecID` | Numeric |  |

#### UserDefinedFieldOwnerLevels
|             |             |     |
|-------------|-------------|-----|
| `Last_Update_UTC` | DateTime |  |
| `Owner_Level_RecID` | Numeric |  |
| `Updated_By` | Text |  |
| `User_Defined_Field_Owner_Level_RecID` | Numeric |  |
| `User_Defined_Field_RecID` | Numeric |  |

#### UserDefinedFieldType
|             |             |     |
|-------------|-------------|-----|
| `Config_Flag` | Boolean |  |
| `Custom_Field_Flag` | Boolean |  |
| `Decimals_Flag` | Boolean | nullable |
| `Default_Decimals` | Numeric | nullable |
| `Display_Info` | Text | nullable |
| `Entry_Type_Flag` | Boolean | nullable |
| `Field_Base_Type` | Text |  |
| `SF_Field_Type_ID` | Text |  |
| `SF_Field_Type_RecID` | Numeric |  |
| `SF_Name` | Text | nullable |

#### UserDefinedRequiredField
|             |             |     |
|-------------|-------------|-----|
| `Display_Flag` | Boolean |  |
| `Field_ID` | Text | nullable |
| `Last_Update_UTC` | DateTime |  |
| `Pod_RecID` | Numeric |  |
| `Required_Flag` | Boolean |  |
| `Updated_By` | Text |  |
| `User_Defined_Required_Field_RecID` | Numeric |  |

#### Warehouse
|             |             |     |
|-------------|-------------|-----|
| `Billing_Unit_RecID` | Numeric | nullable |
| `BusGroup` | Text | nullable |
| `Company_Address_RecID` | Numeric | nullable |
| `Company_RecID` | Numeric | nullable |
| `Default_Flag` | Boolean | nullable |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Location` | Text | nullable |
| `Location_Xref` | Text | nullable |
| `OverallDefault_Flag` | Boolean |  |
| `Owner_Level_RecID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Warehouse_Name` | Text | nullable |
| `Warehouse_RecID` | Numeric |  |

#### WarehouseBin
|             |             |     |
|-------------|-------------|-----|
| `Billing_Unit_RecID` | Numeric | nullable |
| `BusGroup` | Text | nullable |
| `Default_Flag` | Boolean | nullable |
| `Inactive_Flag` | Boolean |  |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Location` | Text | nullable |
| `Max_Quantity` | Numeric | nullable |
| `Min_Quantity` | Numeric | nullable |
| `Overflow_Bin` | Numeric | nullable |
| `Owner_Level_RecID` | Numeric | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Warehouse_Bin_Desc` | Text | nullable |
| `Warehouse_Bin_Height` | Text | nullable |
| `Warehouse_Bin_Length` | Text | nullable |
| `Warehouse_Bin_RecID` | Numeric |  |
| `Warehouse_Bin_Weight` | Numeric | nullable |
| `Warehouse_Bin_Width` | Text | nullable |
| `Warehouse_RecID` | Numeric | nullable |

#### WorkRoles
|             |             |     |
|-------------|-------------|-----|
| `Activity_Class_RecID` | Numeric |  |
| `Hourly_Cost` | Numeric | nullable |
| `Hourly_Rate` | Numeric | nullable |
| `Inactive_Flag` | Boolean |  |
| `Integration_Xref` | Text | nullable |
| `Last_Update` | DateTime |  |
| `Last_Update_UTC` | DateTime |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `taxexempt_flag` | Boolean |  |
| `work_role` | Text |  |

#### WorkRolesLocation
|             |             |     |
|-------------|-------------|-----|
| `Activity_Class_Loc_RecID` | Numeric |  |
| `Activity_Class_RecID` | Numeric |  |
| `Hourly_Rate` | Numeric | nullable |
| `Last_Update` | DateTime | nullable |
| `Owner_Level_RecID` | Numeric |  |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |

#### WorkTypes
|             |             |     |
|-------------|-------------|-----|
| `Act_Default_Flag` | Boolean | nullable |
| `Activity_Type_RecID` | Numeric |  |
| `Billable_Flag` | Boolean |  |
| `Cost_Multiplier` | Numeric | nullable |
| `Default_Flag` | Boolean |  |
| `Hours_Max` | Numeric | nullable |
| `Hours_Min` | Numeric | nullable |
| `Inactive_Flag` | Boolean |  |
| `Integration_Xref` | Text | nullable |
| `Last_Update` | DateTime | nullable |
| `Multiplier_Flag` | Boolean |  |
| `Rate_Type` | Text | nullable |
| `Round_Bill_Hrs` | Numeric | nullable |
| `TimeAccrual_Type_ID` | Text | nullable |
| `Time_Zone` | Text | nullable |
| `Updated_By` | Text | nullable |
| `Utilization_Flag` | Boolean |  |
| `invoice_flag` | Boolean |  |
| `rate` | Numeric | nullable |
| `work_type` | Text |  |


