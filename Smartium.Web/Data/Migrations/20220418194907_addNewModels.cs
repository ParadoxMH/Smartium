using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Smartium.Web.Data.Migrations
{
    public partial class addNewModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "House",
                columns: table => new
                {
                    HouseId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_House", x => x.HouseId);
                });

            migrationBuilder.CreateTable(
                name: "IndicatorLog",
                columns: table => new
                {
                    IndicatorLogId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IndicatorType = table.Column<int>(nullable: false),
                    Value = table.Column<string>(nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IndicatorLog", x => x.IndicatorLogId);
                });

            migrationBuilder.CreateTable(
                name: "Climate",
                columns: table => new
                {
                    ClimateId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TemperatureId = table.Column<int>(nullable: false),
                    TemperatureLogIndicatorLogId = table.Column<int>(nullable: true),
                    HumiditiId = table.Column<int>(nullable: false),
                    HumiditiLogIndicatorLogId = table.Column<int>(nullable: true),
                    HouseId = table.Column<int>(nullable: false),
                    IsHeatingOn = table.Column<bool>(nullable: false),
                    IsVentilationOn = table.Column<bool>(nullable: false),
                    IsAirConditionOn = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Climate", x => x.ClimateId);
                    table.ForeignKey(
                        name: "FK_Climate_House_HouseId",
                        column: x => x.HouseId,
                        principalTable: "House",
                        principalColumn: "HouseId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Climate_IndicatorLog_HumiditiLogIndicatorLogId",
                        column: x => x.HumiditiLogIndicatorLogId,
                        principalTable: "IndicatorLog",
                        principalColumn: "IndicatorLogId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Climate_IndicatorLog_TemperatureLogIndicatorLogId",
                        column: x => x.TemperatureLogIndicatorLogId,
                        principalTable: "IndicatorLog",
                        principalColumn: "IndicatorLogId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Climate_HouseId",
                table: "Climate",
                column: "HouseId");

            migrationBuilder.CreateIndex(
                name: "IX_Climate_HumiditiLogIndicatorLogId",
                table: "Climate",
                column: "HumiditiLogIndicatorLogId");

            migrationBuilder.CreateIndex(
                name: "IX_Climate_TemperatureLogIndicatorLogId",
                table: "Climate",
                column: "TemperatureLogIndicatorLogId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Climate");

            migrationBuilder.DropTable(
                name: "House");

            migrationBuilder.DropTable(
                name: "IndicatorLog");
        }
    }
}
