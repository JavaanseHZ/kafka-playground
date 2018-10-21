// ------------------------------------------------------------------------------
// <auto-generated>
//    Generated by avrogen, version 1.7.7.5
//    Changes to this file may cause incorrect behavior and will be lost if code
//    is regenerated
// </auto-generated>
// ------------------------------------------------------------------------------
namespace de.partner.changed
{
	using System;
	using System.Collections.Generic;
	using System.Text;
	using global::Avro;
	using global::Avro.Specific;
	
	public partial class PartnerChanged : ISpecificRecord
	{
		public static Schema _SCHEMA = Schema.Parse(@"{""type"":""record"",""name"":""PartnerChanged"",""namespace"":""de.partner.changed"",""fields"":[{""name"":""id"",""type"":""long""},{""name"":""Name"",""type"":[""null"",{""type"":""record"",""name"":""Name"",""namespace"":""de.partner.changed"",""fields"":[{""name"":""firstname"",""type"":""string""},{""name"":""lastname"",""type"":""string""}]}]},{""name"":""Address"",""type"":[""null"",{""type"":""record"",""name"":""Address"",""namespace"":""de.partner.changed"",""fields"":[{""name"":""street"",""type"":""string""},{""name"":""city"",""type"":""string""}]}]}]}");
		private long _id;
		private de.partner.changed.Name _Name;
		private de.partner.changed.Address _Address;
		public virtual Schema Schema
		{
			get
			{
				return PartnerChanged._SCHEMA;
			}
		}
		public long id
		{
			get
			{
				return this._id;
			}
			set
			{
				this._id = value;
			}
		}
		public de.partner.changed.Name Name
		{
			get
			{
				return this._Name;
			}
			set
			{
				this._Name = value;
			}
		}
		public de.partner.changed.Address Address
		{
			get
			{
				return this._Address;
			}
			set
			{
				this._Address = value;
			}
		}
		public virtual object Get(int fieldPos)
		{
			switch (fieldPos)
			{
			case 0: return this.id;
			case 1: return this.Name;
			case 2: return this.Address;
			default: throw new AvroRuntimeException("Bad index " + fieldPos + " in Get()");
			};
		}
		public virtual void Put(int fieldPos, object fieldValue)
		{
			switch (fieldPos)
			{
			case 0: this.id = (System.Int64)fieldValue; break;
			case 1: this.Name = (de.partner.changed.Name)fieldValue; break;
			case 2: this.Address = (de.partner.changed.Address)fieldValue; break;
			default: throw new AvroRuntimeException("Bad index " + fieldPos + " in Put()");
			};
		}
	}
}
